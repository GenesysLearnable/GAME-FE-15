"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { SpeakerLoudIcon } from '@radix-ui/react-icons';

export default function SelectRounds() {
  const [selectedRounds, setSelectedRounds] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleRoundChange = (value) => {
    setSelectedRounds(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((cat) => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-stretch p-24">
      <div className="flex flex-row flex-1 overflow-hidden">
        {/* Left Container */}
        <div className="w-1/5 bg-[rgba(26,26,26,1)] flex flex-col justify-between p-4 max-h-[75vh] overflow-y-auto rounded-lg">
          <div className="space-y-4">
            <div className='flex justify-center items-center'>
              <img className="w-28 mx-0 mb-2 px-3 pt-3" src="/app_logo2.svg" alt="App Logo2" />
            </div>
            <Button className="w-full text-lg font-bold">Play</Button>
            <Button className="w-full text-lg font-bold">Puzzle</Button>
            <Button className="w-full text-lg font-bold">Learn</Button>
            <Button className="w-full text-lg font-bold">Social</Button>
          </div>
          <div className="space-y-4">
            <Button className="w-full text-lg font-bold">Sign Up</Button>
            <Button className="w-full text-lg font-bold">Login</Button>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex flex-col p-10 mt-10">
          <div>
            <div className="w-full max-w-4xl p-6 shadow-md rounded-md">
              <div className="mb-4">
                <h1 className="text-xl font-bold mb-2">Select Number of Rounds</h1>
                <div className="flex space-x-14">
                  {['3', '5', '7', '10'].map((round) => (
                    <label key={round} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="rounds"
                        value={round}
                        checked={selectedRounds === round}
                        onChange={() => handleRoundChange(round)}
                      />
                      <span>{round}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-bold mb-2">Select Categories</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-lg">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('Name')}
                        onChange={() => handleCategoryChange('Name')}
                      />
                      <span>Name</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('Animal')}
                        onChange={() => handleCategoryChange('Animal')}
                      />
                      <span>Animal</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('Place')}
                        onChange={() => handleCategoryChange('Place')}
                      />
                      <span>Place</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('Thing')}
                        onChange={() => handleCategoryChange('Thing')}
                      />
                      <span>Thing</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('Book')}
                        onChange={() => handleCategoryChange('Book')}
                      />
                      <span>Book</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('Celebrity')}
                        onChange={() => handleCategoryChange('Celebrity')}
                      />
                      <span>Celebrity</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('Fruit')}
                        onChange={() => handleCategoryChange('Fruit')}
                      />
                      <span>Fruit</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes('Subject')}
                        onChange={() => handleCategoryChange('Subject')}
                      />
                      <span>Subject</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="w-12 h-12 bg-cyan-500/50" />
            <Button className="text-lg font-bold px-10">Continue</Button>
          </div>
        </div>
      </div>

      {/* Bottom Right Loudspeaker Icon */}
      <div className="fixed bottom-10 right-14">
        <SpeakerLoudIcon className=" w-10 h-10 font-extrabold text-black hover:border rounded-full hover:border-sky-500" />
      </div>
    </div>
  );
}
