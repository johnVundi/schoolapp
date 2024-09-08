import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

function AdminDashboard() {
  const [admin, setAdmin] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    fetch("/adminme", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/admins/${admin.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await response.json();
      console.log("Success:", data);
      setAdmin({ ...admin, name, email }); // update the state
      setIsUpdating(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    setIsUpdating(false);
    setName(admin.name);
    setEmail(admin.email);
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleUpdate} className="mx-auto my-10 max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-600 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  };

  const renderDetails = () => {
    return (
      <div className="mx-auto my-10 max-w-lg border-t border-gray-200 pt-4">
        <h2 className="text-3xl font-semibold mb-4">Welcome, {admin.name}</h2>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Name:</p>
          <p className="text-gray-900">{admin.name}</p>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-600">Email:</p>
          <p className="text-gray-900">{admin.email}</p>
        </div>
        <button
          onClick={() => setIsUpdating(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
        <NavLink className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline" to='/sign-up'>Enroll a new student</NavLink>
        <NavLink className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline" to='/new-course'>Create a new course</NavLink>
      </div>
    );
  };

  return (
    <div className="adminAdminDashboard">
      <Nav />
      {isUpdating ? renderForm() : renderDetails()}
    </div>
  );
}

export default AdminDashboard;
