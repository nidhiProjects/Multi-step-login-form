import React, { useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const redirect=useNavigate()
  const initialFormData = {
    name: "",
    username: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleClick = () => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (
      formData.name === "" ||
      formData.username === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.ConfirmPassword === ""
    ) {
      return toast.error("field cant be empty");
    }
    if (!(formData.password === formData.ConfirmPassword)) {
      return toast.error("password doesn't match");
    }
    const existinguser = users?.find((user) => user?.email === formData?.email);
    console.log("users", users);
    console.log("existinguser", existinguser);
    if (existinguser) {
      setFormData(initialFormData);
      return toast.error("user already exist");
    } else {
      localStorage.setItem("users", JSON.stringify([...users, formData]));
      setFormData(initialFormData);
      redirect("/profile")
      return toast.success("user signed up successfully");
    }
  };
  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900">
      {/* Container */}

      {/* Row */}
      <div className=" flex">
        {/* Col */}
        <div
          className="w-3/5 h-auto bg-violet-300  hidden lg:block  bg-cover  bg-no-repeat "
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-vector/gradient-illustration-international-internet-day-celebration_23-2150756043.jpg?w=740&t=st=1712237705~exp=1712238305~hmac=7ccf97ce3beb35ef9d2f2f5cc6dc7dae62619a546c2349bb77712df8bb6c1857")',
          }}
        ></div>
        {/* Col */}
        <div className="w-full  bg-white justify-center  p-5  ">
          <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
            Create an Account!
          </h3>
          <form
            className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 "
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-5 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm leading-tight font-bold text-gray-700 dark:text-white"
                  htmlFor="Name"
                >
                  Name
                </label>
                <input
                  className="w-80 px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded  shadow  focus:outline-none focus:shadow-outline"
                  id="Name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="Username"
                >
                  Username
                </label>
                <input
                  className="w-80 px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="Username"
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-80 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="confimpassword"
                >
                  Confirm Password
                </label>
                <input
                  className="w-80 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="confimpassword"
                  type="password"
                  placeholder="******************"
                  value={formData.ConfirmPassword}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      ConfirmPassword: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-80 px-4 py-2 font-bold text-white bg-violet-500 rounded-full hover:bg-violet-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleClick}
              >
                Create Account
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <p
                className="cursor-pointer inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                
              >
                Forgot Password?
              </p>
            </div>
            <div className="text-center">
              <p
                className="cursor-pointer inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
               
              >
                Already have an account? Login!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
