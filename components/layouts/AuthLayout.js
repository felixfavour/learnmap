"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import Logo from "@/components/Logo.js"
import { Suspense } from "react"

export default function AuthLayout({ children }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  return (
    <Suspense>
      <div className="auth-bg min-h-[100vh] min-w-[100vw] bg-gradient-to-b from-white to-[#6176AE80]">
        <div className="auth-header w-full flex flex-col items-center justify-center h-[30vh]">
          <Logo />
          <h1 className="font-bold text-2xl text-gray-600 mt-4">Learnmap</h1>
        </div>
        <main>{children}</main>
      </div>
    </Suspense>
  )
}
