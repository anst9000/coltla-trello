import { Fragment } from "react"
import OrganizationControl from "./_components/organization-control"
import { startCase } from "lodash"
import { auth } from "@clerk/nextjs/server"

export async function generateMetadata() {
  const { orgSlug } = auth()

  return {
    title: startCase(orgSlug || "organization"),
  }
}

type OrganizationIdLayoutProps = {
  children: React.ReactNode
}

const OrganizationIdLayout = ({ children }: OrganizationIdLayoutProps) => {
  return (
    <Fragment>
      <OrganizationControl />
      {children}
    </Fragment>
  )
}

export default OrganizationIdLayout
