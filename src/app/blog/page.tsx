"use client";

import { PinContainer } from "@/components/ui/3d-card";
import Navbar from "@/components/ui/navbar";
import { useRouter } from "next/navigation";
import Image from 'next/image';
// import { useRouter } from "next/";

const Blog = () => {
    const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="h-[40rem] w-full flex items-center justify-center " onClick={() => {router.push('/blog/intro-blog')}}>
        <PinContainer title="/intro-blog" href="https://twitter.com/mannupaaji">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Purpose?
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                I here breifly discuss the purpose of this website
              </span>
            </div>
            {/* <Image
              className="mt-4"
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              alt="dscsdc"
              width={500}
              height={300}
            />
             */}
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </>
  );
};

export default Blog;
