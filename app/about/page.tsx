"use client";
import Link from 'next/link'
import React from 'react'
import { CgCheckO } from 'react-icons/cg'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { MdGroups } from 'react-icons/md'
import { TbLockSquareRoundedFilled } from 'react-icons/tb'
import Footer from './footer/Footer';
import { useSession } from "next-auth/react";


export default function LandingPage() {
  const Data:{icon: JSX.Element, text: string}[]=[
    {
      icon:<TbLockSquareRoundedFilled />,
      text:"Keep private and safe",
    },{
      icon:<CgCheckO />,
      text:"Easy to use",
    },{
      icon:<MdGroups />,
      text:"Groups to keep in touch",
    }
  ]
  const session = useSession();
  const userName=session?.data?.user?.name || ''
  

  return <>
  <div className='container m-auto'>
    <nav className=" py-4">
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
      <Link
       href={`${userName?'/conversations':'/'}`}
        className="border border-skyblue shadow shadow-slate-700 hover:bg-skyblue text-skyblue hover:text-white font-bold py-2 px-4 rounded">
        {userName?`Hello, ${userName}`:'Login'}
      </Link>
    </li>
  </ul>
   </nav>
   
  <main className="grid grid-cols-1 sm:grid-cols-2 px-2 gap-4">
    <div className="flex flex-col max-w-96 m-auto items-start rounded-md">
      <h1 className="py-4 text-4xl font-semibold">Start chatting with friends, anytime, anywhere with Talkify </h1>
    <p className='text-slate-500 my-2'>Great software that allows you to chat from any place at any time without any interruption.</p>
    <Link className='text-white my-2 shadow shadow-slate-700 bg-skyblue hover:bg-cyan-900 p-2 rounded' href={`${userName?'/conversations':'/'}`} >Start Chatting now</Link>
    </div>
    <div className=" rounded-md">
      <img src="/images/Group Chat-rafiki 1.png" alt="Chatify" />
    </div>
  </main>
  <section className=' grid grid-cols-1 sm:grid-cols-2 px-2 gap-10 '>
    <div className='flex flex-col justify-center items-start'>
      <h2 className='text-3xl max-w-40 font-bold '>What our users say?</h2>
      <p className='my-8'>"Discover What Our Customers Are Saying"</p>
      <img src="/images/text.png" alt="comments" />

    </div>
    <div>
      <img src="/images/Group_36.png" alt="people-chatting" />
    </div>
  </section>
  </div>
  <section className=' bg-skylight mt-5 py-10  '>
<div className='container m-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
{
  Data.map((item,index)=>
  (
<div key={index} className='m-auto bg-white py-5 min-w-80 rounded-lg flex flex-col items-center'>
<span className='text-skyblue text-4xl'>{item.icon}</span>
<h5 className='font-semibold text-skyblue my-2'> {item.text}</h5>
</div>
  ))
}

</div>
  </section>
  <Footer/>
    </>
}