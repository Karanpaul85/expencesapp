"use client";
import Icon from "@/components/Icon";
import CustomButton from "@/components/cutomButton";
import TextField from "@/components/textFiled";
import Link from "next/link";

const Register = () => {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center">
      <div className="flex flex-auto bg-[url('/images/homeBg.webp')] bg-primaryRed bg-contain bg-no-repeat bg-center w-full lg:min-h-screen lg:w-2/3 justify-center text-primaryWhite p-8">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/3 w-full h-full lg:min-h-screen p-8 rounded-t-2xl bg-white -mt-4 bg-primaryWhite">
        <h1 className="w-full text-center text-primaryRed text-2xl font-medium leading-tight mb-4">
          Sign UP
        </h1>
        <form className="flex flex-col items-center w-full">
          <TextField
            type="text"
            variant="primary"
            placeholder="Enter your name"
            id="userName"
            isRequired={true}
            startAdornment={<Icon name="user" size="44" classes="w-4 h-4" />}
          />
          <TextField
            type="email"
            variant="primary"
            placeholder="Enter your email"
            id="userEmail"
            isRequired={true}
            startAdornment={
              <Icon name="envelope" size="44" classes="w-4 h-4" />
            }
          />
          <TextField
            type="password"
            variant="primary"
            placeholder="Enter your password"
            id="userPassword"
            isRequired={true}
            startAdornment={
              <Icon name="lock-closed" size="44" classes="w-4 h-4" />
            }
          />
          <TextField
            type="tel"
            variant="primary"
            placeholder="Enter your mobile number"
            id="userPhone"
            isRequired={true}
            startAdornment={
              <Icon name="device-phone-mobile" size="44" classes="w-4 h-4" />
            }
          />
          <div className="relative w-full mb-4 text-center">
            <CustomButton variant="primary" buttonText="Sign Up" isDisabled={true}/>
          </div>
        </form>
        <div className="w-full text-center text-darkgrey">
          Already have an account,{" "}
          <Link href="/login" className="uppercase text-primaryRed">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Register;
