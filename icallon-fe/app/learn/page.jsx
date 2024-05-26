import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Learn = () => {
  return (
    <div className="flex min-h-screen justify-center relative top-16 pl-20">
      {/* Left Container */}
      <div className="w-1/5 max-h-[75vh] bg-[rgba(26,26,26,1)] p-4 flex flex-col rounded-md justify-between">
        <div className="space-y-4">
          <div className='flex justify-center items-center'>
          <img className="w-28 mx-0 mb-4 pt-3" src="/app_logo2.svg" alt="App Logo" />
          </div>
          <Button as={Link} href="/play" className="w-full hover:border rounded-md hover:border-sky-500 text-lg font-bold">
            Play
          </Button>
          <Button as={Link} href="/puzzle" className="w-full hover:border rounded-md hover:border-sky-500 text-lg font-bold">
            Puzzle
          </Button>
          <Button as={Link} href="/learn" className="w-full hover:border rounded-md hover:border-sky-500 text-lg font-bold">
            Learn
          </Button>
          <Button as={Link} href="/social" className="w-full hover:border rounded-md hover:border-sky-500 text-lg font-bold">
            Social
          </Button>
        </div>
        <div className="space-y-4">
          <Button as={Link} href="/signup" className="w-full hover:border rounded-md hover:border-sky-500 text-lg font-bold">
            Sign Up
          </Button>
          <Button as={Link} href="/login" className="w-full hover:border rounded-md hover:border-sky-500 text-lg font-bold">
            Login
          </Button>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-3/5 p-6 pl-15">
        <h1 className="text-4xl font-bold text-center mb-6">How to Play</h1>
        <div className="space-y-4 text-lg">
          <p>Players choose the categories they want to add to their gameplay. Each round starts with a new letter of the alphabet. Players then provide the required variable that starts with the alphabet for that level.</p>
          <p>In soloplayer mode, the player competes with the computer to get the highest score.</p>
          <p>In multiplayer mode, players compete amongst themselves to score points, with the player having the most accurate answers scoring the highest points.</p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
