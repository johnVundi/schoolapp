import React, { useState } from "react";
import Swal from "sweetalert2";

function EditProfile({id, nameC, emailC, reloadPage}) {
  const [details, setDetails] = useState({
    name: nameC,
    email: emailC,
  });

  function updateProfile(event) {
    event.preventDefault();
    fetch(`/students/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
    .then((res) => {res.json()
      if (res.status === 200) {
        Swal.fire({
            title: "Your fee profile has been updated",
            icon: "success",
            timer: 2000
          });
          setTimeout(() => {
            reloadPage();
          }, 1000);
      }else{
        Swal.fire({
          title: "There was an error updating your profile",
          icon: "error",
          timer: 2000
        });
        setTimeout(() => {
            reloadPage();
          }, 1000);
      }
    })
    .then(data => console.log(data));
    setDetails({
        name: "",
        email: "",
    });
  }
  return (
        <div className="mb-6 w-full container mx-auto shadow-md border bottom-1 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Edit your profile.
            </h1>
            <form onSubmit={updateProfile} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={details.name}
                    onChange={(event) =>
                        setDetails((prevState) => ({
                        ...prevState,
                        name: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Emmanuel Mutisya"
                    required
                  />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>

                  <input
                    type="text"
                    name="email"
                    id="email"
                    defaultValue={details.email}
                    onChange={(event) =>
                        setDetails((prevState) => ({
                        ...prevState,
                        email: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="emmax@gmail.com"
                  />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 font-bold text-gray-800 p-2 rounded-lg"
              >
                Update Profile.
              </button>
            </form>
          </div>
        </div>
  );
}

export default EditProfile;
