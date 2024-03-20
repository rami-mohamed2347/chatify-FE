import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const AuthSocialButton = () => {
    return ( 
        <div className="m-auto gap-1 flex">
            
 <button className="flex
     justify-center
     rounded-xl
     px-2
     py-2
     text-sm
     font-semibold
     focus-visible:outline
     focus-visible:outline-2
     focus-visible:outline-offset-2 
     w-44
     opacity-60 cursor-default
     bg-gray-400 hover:bg-skyblue focus-visible:outline-skyblue"><div className="mr-3 mt-1"><FaGoogle className="text-orange-800" /></div>google </button>

<button className="flex
     justify-center
     rounded-xl
     px-2
     py-2
     text-sm
     font-semibold
     focus-visible:outline
     focus-visible:outline-2
     focus-visible:outline-offset-2 
     w-44
     opacity-60 cursor-default
     bg-gray-400 hover:bg-skyblue focus-visible:outline-skyblue"><div className="mr-3 mt-1 "><FaGithub className="text-black"/></div>Github </button>
        </div>
     );
}
 
export default AuthSocialButton;