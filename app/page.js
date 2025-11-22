import Dashboard from "./dashboard/page";
import Navbar from "@/app/dashboard/components/Navbar";


export default function Home() {
  return (
    <div className="flex w-full flex-col min-h-screen items-center justify-center pt-2  bg-zinc-50 font-sans  bg-linear-to-t from-black  to-gray-800">
      {/* <Navbar/> */}
      <Dashboard />
    </div>
  );
}
