import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"

// Define the routes that are strictly admin-specific
const adminRoutes = ["/admin"]

// Function to check if a role has access to a specific route
const hasAccessToRoute = (role: string, route: string) => {
  if (role === "admin") {
    return true // Admins have access to all routes
  }
  if (role === "user" && !adminRoutes.includes(route)) {
    return true // Users have access to routes that are not admin-specific
  }
  return false
}

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })

    // If token exists, isAuth will be true. Otherwise, isAuth will be false
    const isAuth = !!token
    const currentRoute = req.nextUrl.pathname

    const isAuthPage = currentRoute.startsWith("/login")

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url))
      }
      return null
    }

    if (!isAuth) {
      const loginUrl = new URL("/login", req.url)
      let from = currentRoute
      if (req.nextUrl.search) {
        from += req.nextUrl.search
      }
      loginUrl.searchParams.set("from", from)
      return NextResponse.redirect(loginUrl)
    }

    if (!hasAccessToRoute(token.role, currentRoute)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        return true
      },
    },
  }
)

export const config = {
  matcher: ["/admin", "/login", "/courses/terraform-for-beginners/:path+"],
}
