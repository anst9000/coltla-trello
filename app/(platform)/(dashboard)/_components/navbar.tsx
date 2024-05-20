import { Plus } from "lucide-react"

import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { MobileSidebar } from "./mobile-sidebar"

type NavbarProps = {}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      {/* MOBILE SIDEBAR */}
      <MobileSidebar />

      {/* DESKTOP SIDEBAR */}
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>

        <Button
          variant={"primary"}
          size={"sm"}
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button
          variant={"primary"}
          size={"sm"}
          className="rounded-sm block md:hidden"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-x-4">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterSelectOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl={"/select-org"}
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // padding: "2px 5px",
                backgroundColor: "#e5e5e5",
                border: "1px solid black",
                borderRadius: "5px",
              },
            },
          }}
        />

        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "4px 7px",
                backgroundColor: "#e5e5e5",
                border: "1px solid black",
                borderRadius: "5px",
              },
            },
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
