import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

 function SignUpForm() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    admission_number: "",
    name: "",
    email: "",
    password: "",
    id_number: "",
    gender: "",
  });
  function handleRegister(event) {
    event.preventDefault();
    console.log(student)
    fetch("/students",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ student }),
    })
    .then((res) => {res.json()
      if (res.status === 201) {
        Swal.fire({
            title: "You have successfully registered the student.",
            icon: "success",
            timer: 2000
          });
          setTimeout(() => navigate("/"), 1000);
      }else{
        Swal.fire({
          title: "There was an error creating the student.",
          icon: "error",
          timer: 2000
        });
      }
    })
    setStudent({
      admission_number: "",
      name: "",
      email: "",
      password: "",
      id_number: "",
      gender: "",
    });
  }
  return (
    <section className="bg-slate-300">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign up for account
            </h1>
            <form onSubmit={handleRegister} className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Admission Number
                </label>                  
                  <input
                    type="text"
                    name="admission_number"
                    id="admission_number"
                    defaultValue={student.admission_number}
                    onChange={(event) =>
                      setStudent((prevState) => ({
                        ...prevState,
                        admission_number: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="I168/4076/2089"
                    required
                  />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Full name
                </label>                  
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={student.name}
                    onChange={(event) =>
                      setStudent((prevState) => ({
                        ...prevState,
                        name: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Emmanuel Maxwell"
                    required
                  />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>                  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={student.email}
                    onChange={(event) =>
                      setStudent((prevState) => ({
                        ...prevState,
                        email: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="emmax@gmail.com"
                    required
                  />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your ID Number
                </label>                  
                  <input
                    type="text"
                    name="id_number"
                    id="id_number"
                    defaultValue={student.id_number}
                    onChange={(event) =>
                      setStudent((prevState) => ({
                        ...prevState,
                        id_number: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="37521958"
                    required
                  />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Gender
                </label>                  
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    defaultValue={student.gender}
                    onChange={(event) =>
                      setStudent((prevState) => ({
                        ...prevState,
                        gender: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Male"
                    required
                  />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>                  
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={student.password}
                    onChange={(event) =>
                      setStudent((prevState) => ({
                        ...prevState,
                        password: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 font-bold text-gray-800 p-2 rounded-lg"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
  }

  export default  SignUpForm;