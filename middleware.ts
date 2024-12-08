import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin",
  },
});

export const config = {
  matcher: [
    "/learn/:path*",
    "/practice/:path*",
    "/profile/:path*",
  ],
};