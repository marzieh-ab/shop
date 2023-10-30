import { getCurrentUser } from "@/lib/session";
import Navbar from "./components/Navbar";
import Container from "./components/container/Container";

export default async function Home() {
  const curentUser = await getCurrentUser();

  return (
    <>
      <Navbar />
      <hr />
      <Container />
    </>
  );
}
