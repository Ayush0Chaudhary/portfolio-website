"use client";
import { Meteors } from "@/components/ui/meteor-card";
import { useRouter } from "next/navigation";

const Purenet = () => {
  const router  = useRouter();
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Purenet: The Educational Browser
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50" >
            A modified browser based on FireFox Fenix Project. The USP of this browser is that only educational content is allowed to be accessed. The browser is designed to be used by JEE aspirants. Also available on Playstore.
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300" onClick={() => router.push('https://play.google.com/store/apps/details?id=org.purenet.purenet&hl=en_IN&gl=US') } >
            Demo
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
};


export default Purenet;