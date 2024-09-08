import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import FeeForm from "./FeeForm";
import EditProfile from "./EditProfile";
import { NavLink } from "react-router-dom";

function Dashboard() {
  const [student, setStudent] = useState({});
  const [studentData, setStudentData] = useState(null);
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.status === 200) {
        response.json().then((user) => {
          setStudent(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    if (student.id) {
      fetch(`/students/${student.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("studentData:", data);
          setStudentData(data);
        });
    }
  }, [student]);

  let remainingFee;

  if (studentData && studentData.course) {
    remainingFee = studentData.course.fee - studentData.fee_paid;
    console.log(remainingFee);
  }

  function hotReload() {
    window.location.reload();
  }

  if (!studentData) {
    return <div>Loading...</div>;
  }
  let unitsDiv;
  if (studentData && studentData.course) {
    unitsDiv = studentData.course.units.map((unit) => {
      return (
        <div
          key={unit.name}
          className="rounded bg-white overflow-hidden shadow-lg"
        >
          <img
            className="w-full"
            src={`https://source.unsplash.com/random/800x600?job&${unit.name}`}
            alt={unit.name}
          />
          <div className="px-6 py-4">
            <div className="underline font-bold text-left text-xl mb-2">
              {`Unit name: ${unit.name}`}{" "}
            </div>
            <div className="px-2 py-1 text-left border border-1 shadow-sm rounded-lg">
              <p className="text-gray-700 text-base">{unit.description}</p>
            </div>
          </div>
        </div>
      );
    });
  } else {
    unitsDiv = (
      <p className="text-xl underline">
        You have not registered for a course.
        <NavLink to="/courses" className="hover:text-blue-700"> Click to see courses</NavLink>
      </p>
    );
  }

  return (
    <div>
      <Nav />
      <div className="container shadow-md mx-auto mb-4 mt-4 space-y-6 border border-1 p-2 divide-y divide-slate-500 rounded-lg">
        <div className="flex justify-between">
          <span className="text-xl">Name: </span>
          {student && (
            <h1 className="text-3xl font-sans font-bold underline text-teal-500">
              {student.name}
            </h1>
          )}
        </div>
        <div className="flex items-center justify-between text-left">
          {" "}
          <span className="text-xl">Admission number: </span>
          {student ? (
            <p className="text-xl">{student.admission_number}</p>
          ) : null}
        </div>
        <div className="flex items-center justify-between text-left">
          {" "}
          <span className="text-xl">Email: </span>
          {student ? <p className="text-xl">{student.email}</p> : null}
        </div>
        <div className="flex items-center justify-between text-left">
          <span className="text-xl">Id number: </span>
          {student ? <p className="text-xl">{student.id_number}</p> : null}
        </div>
        <div className="flex items-center justify-between text-left">
          <span className="text-xl">gender: </span>
          {student ? <p className="text-xl">{student.gender}</p> : null}
        </div>
        {studentData && studentData.course && (
          <div className="flex items-center justify-between text-left">
            <span className="text-xl">Course name: </span>
            <p className="text-xl">{studentData.course.name}</p>
          </div>
        )}
        {studentData && studentData.course && studentData.course.fee && (
          <div>
            {remainingFee >= 1 ? (
              <p className="text-xl underline">{`Remaining fee: ${remainingFee} KSH`}</p>
            ) : (
              <p className="text-xl">All your fee has been pain.</p>
            )}
          </div>
        )}
      </div>
      <div className="flex">
        <EditProfile
          id={student.id}
          emailC={student.email}
          nameC={student.name}
          reloadPage={hotReload}
        />
        {studentData && studentData.course && (
          <FeeForm
            id={student.id}
            currentFee={studentData.fee_paid}
            reloadPage={hotReload}
          />
        )}
      </div>
      <div>
        <p className="text-xl underline">Below are the units you are taking.</p>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {unitsDiv}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
