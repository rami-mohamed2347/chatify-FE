import Link from 'next/link'
import React from 'react'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'


export default function LandingPage() {
  
  return <>
  <div className='container m-auto'>
    <nav className="container m-auto py-4">
  <ul className="flex justify-between items-center px-4">
    <li className="flex items-center text-3xl">
      <IoChatboxEllipsesOutline className="text-skyblue bg mr-2" />
      <span className="text-skyblue font-bold">Chatify</span>
    </li>
    <li>
      <ul className='sm:flex hidden space-x-8 text-lg font-bold text-skyblue'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Contact</li>
        <li className='cursor-pointer'>About</li>
      </ul>
    </li>
    <li>
      <Link href={'/'} className="border border-skyblue shadow shadow-slate-700 hover:bg-skyblue text-skyblue hover:text-white font-bold py-2 px-4 rounded">
        Login
      </Link>
    </li>
  </ul>
   </nav>
   
  <main className="grid grid-cols-1 md:grid-cols-2 px-2 gap-4">
    <div className="flex flex-col  max-w-96 m-auto items-center rounded-md">
      <h1 className="py-4 text-4xl font-semibold">Start chatting with friends, anytime, anywhere with Talkify </h1>
    <p className='text-slate-500'>Great software that allows you to chat from any place at any time without any interruption.</p>
    <Link className='text-white my-2 shadow shadow-slate-700 bg-skyblue hover:bg-cyan-900 p-2 rounded' href="/" >Start Chatting now</Link>
    </div>
    <div className=" rounded-md">
      <img src="/images/Group Chat-rafiki 1.png" alt="Chatify" />
    </div>
  </main>
  <section className='grid grid-cols-1 md:grid-cols-2 px-2 gap-4 '>
    <div>
      <h2>What our users say?</h2>
      <p>"Discover What Our Customers Are Saying"</p>
      <img src="/images/text.png" alt="comments" />

    </div>
    <div>
      <img src="/images/Group_36.png" alt="people-chatting" />
    </div>
  </section>
  </div>
    </>
  
}