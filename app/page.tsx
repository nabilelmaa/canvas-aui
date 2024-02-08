import Image from "next/image";
import Login from "./components/Login";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <Login />
    </main>
  );
}
