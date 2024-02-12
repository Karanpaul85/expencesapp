"use client";

import Link from "next/link";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center">
      <div className="flex flex-auto bg-[url('/images/homeBg.webp')] bg-primaryRed bg-contain bg-no-repeat bg-center w-full lg:min-h-screen lg:w-2/3 justify-center text-primaryWhite p-8">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/3 w-full h-full lg:min-h-screen p-8 rounded-t-2xl bg-white -mt-4 bg-primaryWhite">
        <h1 className="w-full text-center text-primaryRed text-2xl font-medium leading-tight mb-4">
          Sign In
        </h1>
        <form className="flex flex-col items-center w-full">
          <div className="relative w-full mb-4  max-w-xs">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
            </div>
            <input
              type="text"
              className="rounded-3xl border border-lightGrey text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required=""
            ></input>
          </div>
          <div className="relative w-full mb-4  max-w-xs">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="password"
              className="rounded-3xl border border-lightGrey text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
              required=""
            ></input>
          </div>
          <div className="relative w-full mb-4 text-center">
            <button className="transition hover:bg-primaryRedHover w-full bg-primaryRed text-center p-3 rounded-3xl text-primaryWhite  max-w-xs">
              Sign In
            </button>
          </div>
        </form>
        <div className="w-full text-center text-darkgrey">
          I am new user,{" "}
          <Link href="/register" className="uppercase text-primaryRed">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Login;