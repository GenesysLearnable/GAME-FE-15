import Image from 'next/image';
import { Cross1Icon, SpeakerLoudIcon } from '@radix-ui/react-icons';




const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen  relative">
          
            <div className="flex justify-between w-full px-8 absolute top-0 left-0 right-0 mt-8">
                <Cross1Icon className="w-8 h-8 cursor-pointer text-gray-600 hover:text-gray-900 font-extrabold text-lg" />
                <SpeakerLoudIcon className="w-8 h-8 cursor-pointer text-gray-600 hover:text-gray-900 font-extrabold text-lg" />
            </div>

            
            <div className="my-8">
                <img
                    src="/app_logo.png"
                    alt="Logo"
                    className="w-36  animate-color-change"
                />
            </div>

            
            <div className="flex items-center justify-center w-full">
                <img
                    src="/femaleavatar4.svg"
                    alt="Avatar 1"
                    className="w-28 h-28"
                />
                <div className="mx-4 py-24 px-24 bg-sky-500/50 shadow-md rounded-md text-center text-xl font-semibold">
                    Ada vs Icallon
                </div>
                <img
                    src="/icalon.svg"
                    alt="Avatar 2"
                    className="w-28 h-28 "
                />
            </div>
        </div>
    );
};

export default LoadingPage;
