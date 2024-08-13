import AuthLayout from "@/components/layouts/AuthLayout"
export const metadata = () => {
  return {
    title: "Authentication | Passpoint",
    description: "",
  }
}

const Layout = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>
}

export default Layout
