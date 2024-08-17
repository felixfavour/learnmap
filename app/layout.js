import { Inter } from "next/font/google"
import { ChakraProviders } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Learnmap",
  description:
    "The next generation of learning for students and all learners. Uber for learning.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  )
}
