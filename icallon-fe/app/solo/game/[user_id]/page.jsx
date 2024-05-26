"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SpeakerLoudIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useGameSettingsStore } from "@/app/settings";
import { redirect } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { GameAlertDialog } from "@/components/solo/GameAlertDialog";

export default function SoloGame({ params }) {
  const timerId = useRef();
  const playerdata = useGameSettingsStore((state) => state.userSelected);
  const currentRound = useGameSettingsStore((state) => state.setCurrentRound);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [randomLetter, setRandomletter] = useState("");
  const [seconds, setSeconds] = useState(60);
  // const [currentUserRound, setCurrentUserRound] = useState(0);
  const { data, loading } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      redirect("/");
    },
  });

  useEffect(() => {
    setIsDialogOpen(true);
    const val = playerdata.currentRound % playerdata.selectedRound;
    currentRound(val);
    resetTimer();
  }, [playerdata.currentRound, seconds == 0]);

  if (loading) {
    return <div>Loading...</div>;
  }

  function handleCloseDialog() {
    setRandomletter(getRandomLetter());
    setIsDialogOpen(false);
    startTimer();
  }

  function getRandomLetter() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    if (seconds >= 0) {
      setSeconds(60);
    }
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <GameAlertDialog open={isDialogOpen} onAccept={handleCloseDialog} />
      {params.user_id !== playerdata.selectedAIOpponent[0].id ? (
        <div className="text-2xl">
          Can't accesss selected an opponent. pls go back and select an opponent
        </div>
      ) : (
        <main className="flex flex-col justify-center items-center h-screen w-[70%]">
          <div className="flex h-[20%] w-full justify-end px-4 ">
            <Image
              src={playerdata.selectedAIOpponent[0].src}
              alt="COM"
              className="h-full object-cover;"
            />
          </div>
          <div className=" flex flex-col flex-1 h-[40%] justify-start w-full bg-sheet-background bg-cover">
            <div className="flex justify-between w-full">
              <div className="w-2/3 px-[15%]">
                <p className="flex text-3xl  w-full  py-[1%]">
                  Round {playerdata.currentRound}/{playerdata.selectedRound}
                </p>
                <p className="flex text-3xl  w-full">
                  Current Alphabet: {randomLetter}
                </p>
              </div>
              <div className="flex flex-col pr-[2%] items-end">
                <Image
                  src="/timer-start.svg"
                  className="flex"
                  width={100}
                  height={100}
                />
                <p className="">{seconds} seconds</p>
              </div>
            </div>
            <div className="grid grid-cols-4 place-content-center justify-center h-[80%] gap-10 pl-[13%] pr-8 items-center w-full">
              {playerdata.selectedCategory.map((data, index) => (
                // console.log(index,data)
                <label key={index + "cat"}>
                  {data}
                  <Input
                    type="text"
                    placeholder={data}
                    autoComplete="off"
                    className=" bg-white w-[100%]"
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="flex h-[20%] w-full px-4">
            <Image
              src={data?.user.avatar.src}
              className=" h-full object-cover;"
            />
          </div>
        </main>
      )}
    </div>
  );
}
