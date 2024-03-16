import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center">
      <div className="flex flex-auto bg-[url('/images/homeBg.webp')] bg-primaryRed bg-contain bg-no-repeat bg-center w-full lg:min-h-screen lg:w-2/3 justify-center text-primaryWhite p-8">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/3 w-full h-full lg:min-h-screen p-8 rounded-t-2xl bg-white -mt-4 bg-primaryWhite">
        <h1 className="w-full text-center text-primaryRed text-2xl font-medium leading-tight mb-4">
          Best way to save your money
        </h1>
        <Link
          href="/register"
          className="transition hover:bg-primaryRedHover w-full bg-primaryRed text-center p-3 rounded-md text-primaryWhite mb-4 max-w-xs"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="transition hover:bg-primaryRedHover w-full bg-primaryRed text-center p-3 rounded-md text-primaryWhite max-w-xs"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}
