"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import AuthLayout from "@/components/layouts/AuthLayout"
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react"

const Login = () => {
  return (
    <AuthLayout>
      <div className="signup-bg section">
        <div className="inner mx-auto w-[90%]">
          <form>
            <FormControl>
              <FormLabel fontWeight={600} fontSize="sm">
                Your Full Name
              </FormLabel>
              <Input
                type="email"
                variant="solid"
                height={50}
                rounded="lg"
                placeholder="Please enter your full name"
                boxShadow="0px 1px 3px 0px #3232471A"
              />
            </FormControl>
            <FormControl mt={6}>
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
            <FormControl mt={6}>
              <FormLabel fontWeight={600} fontSize="sm">
                Bio
              </FormLabel>
              <Textarea
                type="text"
                variant="solid"
                height={150}
                rounded="lg"
                placeholder="Please add a short bio"
                boxShadow="0px 1px 3px 0px #3232471A"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel fontWeight={600} fontSize="sm">
                Topics you are interested in (separate with a comma)
              </FormLabel>
              <Input
                type="text"
                variant="solid"
                height={50}
                rounded="lg"
                placeholder="Please enter your full name"
                boxShadow="0px 1px 3px 0px #3232471A"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel fontWeight={600} fontSize="sm">
                Your Calendly link
              </FormLabel>
              <Input
                type="text"
                variant="solid"
                height={50}
                rounded="lg"
                placeholder="Please enter your full name"
                boxShadow="0px 1px 3px 0px #3232471A"
              />
              <FormHelperText>
                Learnmap uses Calendly for scheduling
              </FormHelperText>
            </FormControl>
            <Button mt={12}>Create your account</Button>
          </form>
          <p className="text-center text-sm text-gray-700 mt-4 pb-8">
            I already have an account?{" "}
            <Link
              href="/login"
              className="text-black font-semibold border-b border-black"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login
