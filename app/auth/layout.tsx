import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use the getServerSession function to get the session
  const session = await getServerSession(authOptions);

  // Redirect if the user is already signed in
  if (session) {
    redirect("/learn");
    return null; // Ensure nothing is rendered after redirect
  }

  // Render the children if the user is not signed in
  return <>{children}</>;
}
