import Image from "next/image";
import AuthForm from "./components/AuthForm";
import { useState } from "react";
type Variant = "LOGIN" | "REGISTER";


export default function Home() {
  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 h-full">
       <div className="h-full justify-center items-center bg-skyblue lg:flex hidden md:block"><img src="/images/Login-amico 1.png" alt="" className="m-auto w-96" /> </div>
   

  <div
      className="
 m-auto
  "
    >
     
      <AuthForm />
    </div>
    </div>
   
    
    </>
  );
}
