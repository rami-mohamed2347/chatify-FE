import Link from 'next/link'
import React from 'react'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function LandingPage() {
  // const navigate=useNavigate();
  return <>
  <div className='container m-auto'>
    <nav className=" py-4">
  <ul className="flex justify-between items-center px-4">
    <li className="flex items-center text-3xl">
      <IoChatboxEllipsesOutline className="text-cyan-600 bg mr-2" />
      <span className="text-cyan-600 font-bold ">Chatify</span>
    </li>
    <li>
      <Link href={'/'} className="border border-cyan-600 hover:bg-cyan-600 text-cyan-600 hover:text-white font-bold py-2 px-4 rounded">
        Login
      </Link>
    </li>
  </ul>
   </nav>
   
  <main className="grid grid-cols-1 md:grid-cols-2 px-2 gap-4">
    <div className="flex flex-col  max-w-96 m-auto items-center rounded-md">
      <h1 className="py-4 text-4xl font-semibold">Start chatting with friends, anytime, anywhere with Talkify </h1>
    <p className='text-slate-500'>Great software that allows you to chat from any place at any time without any interruption.</p>
    <Link className='text-white my-2 bg-cyan-600 hover:bg-cyan-900 p-2 rounded' href="/" >Start Chatting now</Link>
    </div>
    <div className=" rounded-md">
      <img src="/images/Group Chat-rafiki 1.png" alt="Chatify" />
    </div>
  </main>
  </div>
    </>
  
}