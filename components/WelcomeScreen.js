import Logo from "@/components/Logo.js"
import { Button } from "@chakra-ui/react"
import Link from "next/link"

export default function WelcomeScreen() {
  return (
    <div className="auth-bg min-h-[100vh] min-w-[100vw] bg-gradient-to-b from-white to-[#6176AE80] flex flex-col justify-between items-center">
      <div className="auth-header w-full flex flex-col items-center justify-center flex-1">
        <Logo />
        <h1 className="font-bold text-2xl text-gray-600 mt-4">Learnmap</h1>
      </div>
      <div className="actions w-[90%] mx-auto flex flex-col gap-4 py-6">
        <Link
          href={"/signup"}
          className="text-white h-[50px] bg-[#6176AE] font-bold flex items-center justify-center rounded-lg px-4 py-2 w-full"
        >
          Create an account
        </Link>
        <Link
          href={"/login"}
          className="text-[#6176AE] h-[50px] bg-white font-bold flex items-center justify-center rounded-lg px-4 py-2 w-full"
        >
          Log in to your account
        </Link>
        <p className="text-center text-sm text-gray-700 mt-4">
          Are you an instructor?{" "}
          <Link
            href="/signup/instructor"
            className="text-black font-semibold border-b border-black"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}
