"use client"
import Link from "next/link"
import AuthLayout from "@/components/layouts/AuthLayout"
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react"

const Login = () => {
  return (
    <AuthLayout>
      <div className="login-bg section">
        <div className="inner mx-auto w-[90%]">
          <form>
            <FormControl>
              <FormLabel fontWeight={600} fontSize="sm">
                Your Email
              </FormLabel>
              <Input
                type="email"
                variant="solid"
                height={50}
                rounded="lg"
                placeholder="Please enter your email address"
                boxShadow="0px 1px 3px 0px #3232471A"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel fontWeight={600} fontSize="sm">
                Your Password
              </FormLabel>
              <Input
                type="password"
                variant="solid"
                height={50}
                rounded="lg"
                placeholder="Please enter your password"
                boxShadow="0px 1px 3px 0px #3232471A"
              />
            </FormControl>
            <Button mt={12}>Sign In</Button>
          </form>
          <p className="text-center text-sm text-gray-700 mt-4">
            Are you a new user?{" "}
            <Link
              href="/signup"
              className="text-black font-semibold border-b border-black"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
