import { Fragment } from "react"
import OrganizationControl from "./_components/organization-control"

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
