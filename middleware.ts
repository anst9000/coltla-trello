import { RedirectToSignIn } from "@clerk/nextjs"
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isOrganizationRoute = createRouteMatcher([
  "/organization(.*)/(.*)/settings(.*)",
])
// const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  // Restrict admin route to users with specific role
  // if (isAdminRoute(req)) auth().protect({ role: 'org:admin' });

  // Restrict organization routes to signed in users
  if (isOrganizationRoute(req)) auth().protect()
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
