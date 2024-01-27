import { redirect } from "react-router-dom";

export async function sellerAuth() {
  const isLoggedin = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");
  if (!isLoggedin) {
    throw redirect("/login");
  }
  if (userRole !== "SELLER") {
    throw redirect("/");
  }
}
