import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Swal from "sweetalert2";
import { AdminContext } from "../App";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [student, setStudent] = useState(null);
  const [admin, setAdmin] = useContext(AdminContext);
  useEffect(() => {
    fetch("/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.status === 200) {
        response.json().then((user) => {
          setStudent(user);
        });
      }
    });
  }, []);

  function deleteCourse(e) {
    e.preventDefault();
    fetch(`/courses/${e.target.id}`,{
      method: "DELETE",
    })
    .then((res) => {
      res.json();
      if (res.status === 204) {
        Swal.fire({
          title: "Your have been successfully deleted the course",
          icon: "success",
          timer: 2000,
        });
      } else {
        Swal.fire({
          title: "There was an error creating the course",
          icon: "error",
          timer: 2000,
        });
      }
    });
  }

  function enroll(e) {
    e.preventDefault();

    if (student) {
      if (student.course_id) {
        Swal.fire({
          title: "You are already enrolled in a course",
          icon: "error",
          timer: 2000,
        });
      } else {
        let enrolling = {
          course_id: e.target.id,
        };
        fetch(`/students/${student.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrolling),
        }).then((res) => {
          res.json();
          if (res.status === 200) {
            Swal.fire({
              title: "Your have been successfully enrolled",
              icon: "success",
              timer: 2000,
            });
          } else {
            Swal.fire({
              title: "There was an error enrolling you!",
              icon: "error",
              timer: 2000,
            });
          }
        });
      }
    } else {
      Swal.fire({
        title: "You need to be logged in",
        icon: "error",
        timer: 2000,
      });
    }
  }

  const coursesDiv = courses.map((course) => {
    return (
      <div className="border shadow-md" key={course.id}>
        <a
          href={`/courses/units/${course.id}`}
          className="rounded bg-white overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src={`https://source.unsplash.com/random/800x600?job&${course.id}`}
            alt={course.name}
          />
        </a>
        <div className="px-6 py-4">
          <div className="underline font-bold text-left text-xl mb-2">
            {`Course name: ${course.name}`}{" "}
          </div>
          <div className="px-2 py-1 text-left border border-1 shadow-sm rounded-lg">
            <div className="flex justify-between">
              <p className="underline text-bold">{`Fee: ${course.fee} KSH`}</p>
              <button
                onClick={enroll}
                id={course.id}
                className="border bg-blue-500 px-2 rounded-lg"
              >
                Enroll
              </button>
            </div>
            <p className="text-gray-700 text-base">{course.description}</p>
            {admin && (<button
              onClick={deleteCourse}
              id={course.id}
              className="border bg-red-500 px-2 text-right rounded-lg"
            >
              Delete
            </button>)}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white">
      <Nav />
      <h1 className="mt-3 underline text-3xl">Banda School Courses</h1>
      <div className="mt-4 px-10 text-left">
        <p className="mb-3">
          Welcome to the Banda School's courses page! Here you'll find all the
          information you need to choose the courses that best fit your academic
          goals and interests. Our school offers a diverse range of courses
          taught by experienced teachers who are dedicated to helping you
          achieve your full potential.
        </p>
        <p>
          Whether you're interested in science, math, history, language, or the
          arts, we have something for you. With our carefully designed
          curriculum and flexible learning options, you'll have the opportunity
          to explore new subjects and develop skills that will prepare you for
          success in college and beyond. Browse through our course offerings and
          discover the exciting opportunities that await you at Banda School.
        </p>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {coursesDiv}
      </div>
    </div>
  );
}

export default Courses;
