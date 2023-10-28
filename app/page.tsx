import { getCurrentUser } from "@/lib/session";
import Navbar from "./components/Navbar";

export default async function Home() {
  const curentUser = await getCurrentUser();
  console.log(curentUser, "curenttt");

  return <Navbar />;
}
