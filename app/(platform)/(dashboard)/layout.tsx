import { redirect } from "next/navigation"
import Navbar from "./_components/navbar"
import { useEffect } from "react"
import { useAuth } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  )
}

export default DashboardLayout
