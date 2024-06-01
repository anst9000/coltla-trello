import { clerkMiddleware } from "@clerk/nextjs/server"

export default clerkMiddleware()

const isIgnoredRoutes = ["/", "/api/webhook", "/api/webhooks"]

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  ignoredRoutes: isIgnoredRoutes,
}
