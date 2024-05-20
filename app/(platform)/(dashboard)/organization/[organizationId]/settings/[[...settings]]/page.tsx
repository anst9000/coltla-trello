import { OrganizationProfile } from "@clerk/nextjs"

const SettingsPage = () => {
  return (
    <div className="w-full">
      <h1 className="mb-4">Organization Settings</h1>
      {/* <OrganizationProfile /> */}
      <OrganizationProfile
        // path="/settings"
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
            },
          },
        }}
      />
    </div>
  )
}

export default SettingsPage
