"use client";

import Icon from "@/components/Icon";
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
              <Icon name="envelope" size="44" classes="w-4 h-4" />
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
              <Icon name="lock-closed" size="44" classes="w-4 h-4" />
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
