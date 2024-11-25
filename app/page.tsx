import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-background text-text min-h-screen">
      <Navbar/>
      <main className="max-w-7xl mx-auto p-4 px-4 lg:px-6">  
        <h1>Hello, world!</h1>
      </main>
    </div>
  );
}
