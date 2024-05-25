"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SpeakerLoudIcon } from "@radix-ui/react-icons";
import AI_avatar1 from "@/public/AI_avatar1.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function SoloGame({ params }) {
  const { data, loading } = useSession();

  // return <p>Post: {params.user_id}</p>;

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <main className="flex flex-col justify-center items-center h-screen w-[70%]">
        <div className="flex h-[20%] w-full justify-end px-4 ">
          <Image src={AI_avatar1} className="h-full object-cover;" />
        </div>
        <div className=" flex flex-col h-[40%] justify-start w-full bg-sheet-background bg-cover">
          <p className="flex text-3xl  w-full px-[15%] py-[1%]">Round 1/3</p>
          <p className="flex text-3xl  w-full px-[15%]">Current Alphabet: Z</p>
          <div className="flex justify-center h-[80%] gap-10 items-center w-full">
            <Input
              type="text"
              placeholder="Name"
              className=" bg-white w-[20%]"
            />
            <Input
              type="text"
              placeholder="Animal"
              className=" bg-white w-[20%]"
            />
            <Input
              type="text"
              placeholder="Place"
              className=" bg-white w-[20%]"
            />
            <Input
              type="text"
              placeholder="Thing"
              className=" bg-white w-[20%]"
            />
          </div>
        </div>
        <div className="flex h-[20%] w-full px-4">
          <Image src={data.user?.avatar?.src} className=" h-full object-cover;" />
        </div>
      </main>
    </div>
    /* 
    <div className="flex flex-col items-center justify-center">
      <div>
        <Image
          src={AI_avatar1}
          alt="icalon"
          className="w-full  shadow-lg shadow-cyan-500/50 mb-6 relative left-0"
        />
      </div>
      <div className=" relative h-[500px] w-full max-w-4xl p-6 bg-sheet-background bg-no-repeat bg-cover">
        <div className="absolute top-4 left-4 font-bold text-lg">
          <p>Round 1/3</p>
          <p>Current Alphabet: Z</p>
        </div>

        <div className="absolute top-0 right-0 mr-2">
          <img
            src="/timer-start.svg"
            alt="timer"
            className="mr-5 mt-3 w-12 h-12 mb-2 absolute top-0 right-0"
          />
          <p className="text-sm mt-14">60 seconds</p>
        </div>

        <div className="flex justify-center items-center space-x-16 mt-20">
          <Input
            type="text"
            placeholder="Name"
            className="border p-2 rounded-md w-24"
          />
          <Input
            type="text"
            placeholder="Animal"
            className="border p-2 rounded-md w-24"
          />
          <Input
            type="text"
            placeholder="Place"
            className="border p-2 rounded-md w-24"
          />
          <Input
            type="text"
            placeholder="Thing"
            className="border  p-2 rounded-md w-24"
          />
        </div>
      </div>

      <div className="flex">
        <img
          src="/femaleavatar4.svg"
          alt="femaleavatar4"
          className="w-28 h-28  shadow-lg shadow-cyan-500/50 absolute start-20 mx-44 mt-6"
        />

        <Button className="p-6 text-lg font-bold absolute  ml-64 mt-6">
          Submit Response
        </Button>
      </div>

      <div className="absolute -bottom-36 right-20">
        <SpeakerLoudIcon className=" w-10 h-10 font-extrabold text-black" />
      </div>
    </div> */
  );
}
