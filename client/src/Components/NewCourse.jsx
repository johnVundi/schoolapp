import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

 function NewCourse() {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    name: "",
    description: "",
    fee: "",
  });
  function createCourse(event) {
    event.preventDefault();
    console.log(course)
    fetch("/courses",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course }),
    })
    .then((res) => {res.json()
      if (res.status === 201) {
        Swal.fire({
            title: "You have successfully created a new course.",
            icon: "success",
            timer: 2000
          });
          setTimeout(() => navigate("/courses"), 1000);
      }else{
        Swal.fire({
          title: "There was an error creating the course.",
          icon: "error",
          timer: 2000
        });
      }
    })
    setCourse({
        name: "",
        description: "",
        fee: "",
    });
  }
  return (
    <section className="bg-slate-300">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create a new course.
            </h1>
            <form onSubmit={createCourse}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>                  
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={course.name}
                    onChange={(event) =>
                      setCourse((prevState) => ({
                        ...prevState,
                        name: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="ICT"
                    required
                  />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>                  
                  <input
                    type="text"
                    name="description"
                    id="description"
                    defaultValue={course.description}
                    onChange={(event) =>
                      setCourse((prevState) => ({
                        ...prevState,
                        description: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="The best course description"
                    required
                  />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fee
                </label>                  
                  <input
                    type="number"
                    name="fee"
                    id="fee"
                    defaultValue={course.fee}
                    onChange={(event) =>
                      setCourse((prevState) => ({
                        ...prevState,
                        fee: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="25000"
                    required
                  />
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-teal-500 font-bold text-gray-800 p-2 rounded-lg"
              >
                Create course
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
  }

  export default  NewCourse;