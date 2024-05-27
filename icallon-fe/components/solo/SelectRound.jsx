import React from "react";
import logo2 from "/public/app_logo2.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useGameSettingsStore } from "@/app/settings";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { SpeakerLoudIcon } from "@radix-ui/react-icons";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function SelectRound({
  data,
  selectedAIAvatar,
  setSelectedAIAvatar,
  currentPage,
  goBack,
}) {
  const router = useRouter();
  const setGameSettings = useGameSettingsStore((state) => state.gameSettings);
  const playerdata = useGameSettingsStore((state) => state.userSelected);
  const currentRound = useGameSettingsStore((state) => state.setCurrentRound);

  function handleRadioChange() {
    const s = event.target.value;
    console.log(s);
  }

  function handleCategories(data, id) {
    const y = event.target.value;
    console.log(y);
    console.log(id, ":", data);
    console.log(event.target.id);
  }
  return (
    <main className=" flex justify-between items-center h-screen w-[80%]">
      <div className="bg-[#404040] h-[80%] w-2/12 p-4 flex flex-col justify-between">
        <div className="flex flex-col items-center gap-4">
          <Image src={logo2} alt="logo" className="w-36 mx-auto" />
          <Button asChild variant="outline" size="lg">
            <Link href="/learn">Learn</Link>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          {!data && (
            <>
              {/* <Avatar>
                <AvatarImage src={data.user.avatar?.src} />
                <AvatarFallback>{data.user.avatar?.alt}</AvatarFallback>
              </Avatar> */}

              <Button variant="outline" size="lg" onClick={() => {}}>
                Login
              </Button>
            </>
          )}
          <Button
            variant="default"
            size="lg"
            onClick={() => goBack(currentPage)}
          >
            Go back
          </Button>
        </div>
      </div>

      <main className="flex flex-col justify-center items-center h-screen w-[80%] p-[3%]">
        <div className="flex h-[20%] w-full justify-end px-4 ">
          <Image
            src={playerdata.selectedAIOpponent[0].src}
            alt="COM"
            className="h-full object-cover;"
          />
        </div>
        <div className=" flex flex-col flex-auto h-[40%] justify-center w-full pl-[2%] space-y-10 bg-gradient-to-t from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95%">
          <p className="flex text-3xl text-center   w-full">
            Select Number of rounds
          </p>
          <RadioGroup
            defaultValue="option1"
            onValueChange={handleRadioChange}
            className="flex  w-full"
          >
            {setGameSettings.rounds.map((data, index) => (
              // console.log(index,data)
              <div className="flex  items-center space-x-2">
                <RadioGroupItem
                  key={`key${index}`}
                  value={data}
                  id={`option${index}`}
                />
                <Label htmlFor={`option${index}`}>{`${data} rounds`}</Label>
              </div>
            ))}
          </RadioGroup>
          <p className="flex text-3xl text-center w-full">Select Categories</p>
          <div className="grid grid-cols-4 w-full gap-5">
            {setGameSettings.categories.map((data, index) => (
              <div className="items-center flex space-x-2 w-full">
                <Checkbox
                  key={`${index}ky`}
                  id={`${index}cb`}
                  value={data}
                  onCheckedChange={handleCategories}
                />
                <div className="flex ">
                  <label htmlFor={`${index}cb`}>{data}</label>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-10 pl-[13%] pr-8 items-center w-full"></div>
        </div>
        <div className="flex h-[20%] justify-between w-full px-4">
          <Image
            src={data?.user.avatar.src}
            className=" h-full object-cover;"
          />
          <div className="flex flex-col justify-around items-end h-full">
            <Button
              size="lg"
              on
              onClick={() => {
                router.push(`/solo/game/${selectedAIAvatar.id}`);
              }}
            >
              Continue
            </Button>
            <SpeakerLoudIcon className="w-1/2 h-1/2 " />
          </div>
        </div>
      </main>
    </main>
  );
}
