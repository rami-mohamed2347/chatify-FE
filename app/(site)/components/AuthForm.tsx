"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";


type Variant = "LOGIN" | "REGISTER";

const AuthFrom = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // axios register
    }

    if (variant === "LOGIN") {
      // nextauth signin
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth social sign in
  };

  return (
  <div
      className="
 
  sm:w-full
  sm:max-w-md
  " >
      <div
        className="
     bg-white
      px-4
     sm:rounded-lg
     sm:px-10
    ">
 <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
<>
<h2 className="m-auto text-center text-skyblue font-semibold">Create Your Account</h2>
           <Input id="Fisrtname" label="First Name" register={register} errors={errors} />
            <Input id="Lastname" label="Last Name" register={register} errors={errors} />
            </> 
          )}
       
      
       {variant === "LOGIN" && (

<><h2 className="m-auto text-center text-skyblue font-semibold">Welcome back!</h2>
<p className=" m-auto text-center text-skyblue">Please enter your details</p></> )} 
 <Input
    id="email"
    label="Email"
    type="email"
    register={register}
    errors={errors} />
 <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          
          />
{variant === "LOGIN" && (
            
<div className="flex justify-between items-center text-gray-500 mt-10" ><div>
<input type="checkbox" className="mr-1"/>
<label>Remeber Me?</label>
        </div> 
        <div>
          <a href="#">Forget password?</a>
        </div>
        
        </div> )}
        {variant === "REGISTER" && (
           <Input
           id="Confirm password"
           label="Confirm password"
           type="Confirm password"
           register={register}
           errors={errors}
         
         />
        )}
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Login" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
             absolute
             inset-0
             flex
              items-center
            "
            >
              <div className="w-20 border-t boder-gray-300 m-auto" />
            </div>
            <div className=" relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-400">
                OR
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton />
          </div>
<div className="flex gap-2 m-auto w-60 mt-5 text-gray-500"> {variant ==='LOGIN'? 'Dont have an account?':'Aready have an account'}
          <div onClick={toggleVariant}
          className="text-blue-600 cursor-pointer">
 {variant ==='LOGIN'? 'Sign up':'Login'}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFrom;
