import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedin = localStorage.getItem("token");
  if (!isLoggedin) {
    throw redirect("/login");
  }
}
