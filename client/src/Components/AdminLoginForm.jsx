import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AdminContext } from "../App";

function AdminLoginForm() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useContext(AdminContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleLogin(event) {
    event.preventDefault();
    fetch("/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login }),
    })
      .then((res) => {
        res.json();
        if (res.status === 201) {
          setTimeout(() => navigate("/"), 1000);
          setAdmin(true);
        } else {
          Swal.fire({
            title: "Wrong password or email",
            icon: "error",
            timer: 2000,
          });
        }
      })
      .then((data) => console.log(data));
    setLogin({
      email: "",
      password: "",
    });
  }

  return (
    <section className="bg-gray-100 h-screen flex items-center adminlogin">
      <div className="container mx-auto max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Login</h2>
        <form
          className="bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleLogin}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              value={login.email}
              onChange={(event) =>
                setLogin((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={login.password}
              onChange={(event) =>
                setLogin((prevState) => ({
                  ...prevState,
                  password: event.target.value,
                }))
              }
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <div className="mt-4 text-center flex justify-between">
            <Link
              className="text-blue-500 hover:text-blue-700"
              to="/adminsignup"
            >
              <span className="text-black">Don't have an account?{" "}</span>Sign up
            </Link>
            <Link to="/" className="underline text-blue-500">
              Homepage
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminLoginForm;
