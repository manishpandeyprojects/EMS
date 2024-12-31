import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="flex h-screen flex-1 items-center flex-col justify-center px-6 py-12 lg:px-8 ">
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
                    required
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
                  {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
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
                    required
                    autoComplete="current-password"
                    className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-full outline-none border-2 border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="block w-full px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-full outline-none border-none bg-emerald-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
