import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <>
    <div className="flex float-start  bg-grayColor h-full w-minwidth">
       <img src="/images/Login-amico 1.png" alt="" className="w-minwidth h-60 flex m-auto" /> 
    </div>
   
    <div
      className="
 grid justify-items-stretch
  min-h-full
  flex-col
  sm:px-6
  lg:px-8
  "
    >
      
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        // <h2
        //   className="
        // mt-6
        // text-center
        // text-3xl
        // font-bold
        // tracking-tight
        // text-gray-900
        // "
        // >
        //   Sign in to your account
        // </h2>
      </div> */}
      <AuthForm />
    </div>
    
    </>
  );
}
