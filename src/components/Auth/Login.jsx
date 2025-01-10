import React, { useState } from "react";

const Login = ({ handleLogin, checkAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.trim() === "") {
      setError("Password cannot be blank");
      return;
    }

    const checkAdminCredentials = checkAuth({
      email: email,
      password: password,
      role: "admin",
    });

    if (checkAdminCredentials) {
      handleLogin(email, password);
      setError("");
      setEmail("");
      setPassword("");
    } else {
      const checkEmployeeCredentials = checkAuth({
        email: email,
        password: password,
        role: "employee",
      });
      if (checkEmployeeCredentials) {
        handleLogin(email, password);
        setError("");
        setEmail("");
        setPassword("");
      } else {
        setError("Please provide the correct credentials");
      }
    }
  }

  return (
    <>
      <div className="flex h-screen flex-1 items-center flex-col justify-center px-6 py-12 lg:px-8 ">
        <h1 className="text-center text-5xl font-bold tracking-tight text-white pb-7">
          Login
        </h1>
        <div className="border-emerald-600 border-2 rounded-lg p-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-full outline-none border-2 border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-full outline-none border-2 border-emerald-600"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
              <div>
                <button
                  type="submit"
                  className="block w-full px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-full outline-none border-none bg-emerald-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
