"use client"
import "@/assets/styles/globals.css"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function AuthLayout({ children }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  return <div className="empty-div">{children}</div>
}
