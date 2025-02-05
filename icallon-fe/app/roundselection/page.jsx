"use client"
import React from 'react'
import { SpeakerLoudIcon } from '@radix-ui/react-icons'
import Link from 'next/link';
import { Button } from "@/components/ui/button";


export default function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center md:gap-40'>
     <div className='bg-[#404040] h-[80vh] w-[200px]'>

     <img src="/app_logo.png" className="w-full  z-50 md:block md:w-[80%] py-10 px-3 object-cover" alt="" />

          <ul className='flex flex-col justify-center items-center gap-10 p-5 '>
               <Link className='border px-10  text-white' href={"Avatar"}>Avatar</Link>
               <Link  className='border px-10 text-white' href={""}>Puzzle</Link>
               <Link className='border px-10 text-white' href={""}>Learn</Link>
               <Link className='border px-10 text-white' href={""}>Social</Link>
          </ul>


          <ul className='flex flex-col gap-10 items-center mt-[15rem] p-5'>
               <Link className='border px-10 text-white' href={""}>Sign UP</Link>
               <Link  className='border px-10 text-white' href={""}>Log in</Link>
          </ul>


     </div>
      <div>
      <img src="/icalon.svg" alt="icalon" className="w-28 h-28 left-[15rem] shadow-lg shadow-cyan-500/50 mb-6 relative md:left-[35rem]" />
      <div className='bg-gradient-to-r from-[#1EA8B1] from-5% via-transparent via-50% to-[#1EA8B1] to-95%  p-5'>

<h1>select number of rounds</h1>
<div className='flex justify-between'>

<div class="flex items-center me-4">
        <input id="yellow-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-red-400 bg-gray-100 border-gray-600 focus:ring-red-500 dark:focus:ring-red-600 dark:bg-slate-400 focus:ring-2  dark:border-gray-600" />
        <label for="yellow-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
    </div>

   <div className='flex justify-center items-center gap-2'>
        <input type="radio" name="" id=""  />
        <label>5</label>
   </div>
   <div className='flex justify-center items-center gap-2'>
        <input type="radio" name="" id="" />
        <label>7</label>
   </div>
   <div className='flex justify-center items-center gap-2'>
        <input type="radio" name="" id="" />
        < label>10</label>
   </div>
</div>

<h1>Select Categories</h1>
<div className='flex py-6 justify-between'>
         <div className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" className=' rounded-full bg ' />
        
        <label>Name</label>  
        </div>
   <div className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <label>Animal</label>
   </div>
   <div className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <label>Place</label>
   </div>
   <div className='flex justify-center items-center  gap-2'>
        <input type="checkbox" name="" id="" />
        <label>Thing</label>
   </div>
</div>

<div className='flex py-6 justify-between'>
         <div className='flex justify-center items-center' gap-2>
        <input type="checkbox" name="" id="" />
        <label>Books</label>
   </div>
   <div  className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <label>Celebrities</label>
   </div>
   <div  className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <label>Fruits</label>
   </div>
   <div  className='flex justify-center items-center gap-2'>
        <input type="checkbox" name="" id="" />
        <label>Subjects</label>
   </div>
</div>

</div>

<div className='flex justify-around items-center md:gap-[25rem] py-5'>
<img src="/femaleavatar4.svg" alt="femaleavatar4" className="  shadow-lg shadow-cyan-500/50 " />

<Button className="p-6 text-lg font-bolds shadow-lg border border-y-white shadow-white ">Continue</Button>

       </div>
     
      </div>
       
        
       <div className='absolute -bottom-2 right-20'>
        <SpeakerLoudIcon className=" w-10 h-10 md:md-50 md:mb-80 font-extrabold text-black" />
      </div>
    </div>
  )
}
