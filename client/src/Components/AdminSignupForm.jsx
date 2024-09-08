import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

function AdminSignupForm() {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSignedUp, setIsSignedUp] = useState(false);

  const admins_params = () => {
    return {
      admin: {
        name: admin.name,
        email: admin.email,
        password: admin.password
      }
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ admin });
    try {
      const response = await fetch("/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admins_params()),
      });
      const data = await response.json();
      console.log("Success:", data);
      setIsSignedUp(true);
      setAdmin({
        name: "",
        email: "",
        password: ""
      });
      window.location.href = "/admindashboard"; // Navigate to admin dashboard page
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isSignedUp) {
    return <AdminDashboard />;
  }
 
  
  return (
    <section className="bg-gray-100 h-screen flex items-center adminsignup">
      <div className="container mx-auto max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Signup</h2>
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Full Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              value={admin.name}
              onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              value={admin.email}
              onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={admin.password}
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
              required
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Signup
          </button>
          <div className="mt-4 text-center">
            Already have an account? <Link to="/adminlogin" className="text-blue-500 underline">Login</Link>
          </div>
          </form>
          </div>
          </section>
);
}

export default AdminSignupForm;
