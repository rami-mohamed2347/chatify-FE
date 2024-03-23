"use client";

import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthInput from "@/app/components/inputs/AuthInput";
import Button from "@/app/components/Button";
import AuthButtons from "@/app/components/AuthButtons";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthFrom = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") router.push("/users");
  }, [session?.status, router]);

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      console.log(data);

      axios
        .post(
          "https://chat-backend-citu.onrender.com/api/v1/auth/register",
          data
        )
        .then((response) => {
          console.log("Registration successful:", response); // Logging the response

          // If registration is successful, perform login
          return axios.post(
            "https://chat-backend-citu.onrender.com/api/v1/auth/login",
            {
              ...data,
              redirect: false,
            }
          );
        })
        .then((loginResponse) => {
          console.log("Login successful:", loginResponse);

          // Check if the login response contains error
          if (loginResponse.data.error) {
            console.log(loginResponse.data.error);
            toast.error("Invalid credentials");
          } else {
            // Successful login
            toast.success("Logged in!");

            // Optionally, you can perform additional actions here
          }
        })
        .catch((error) => {
          // Handle any errors that occurred during registration or login
          console.error("Registration or login failed:", error);
          toast.error("Something went wrong!");
        })
        .finally(() => {
          // Regardless of the outcome (success or failure), stop loading
          setIsLoading(false);
        });
    }

    if (variant === "LOGIN") {
      axios
        .post("https://chat-backend-citu.onrender.com/api/v1/auth/login", {
          ...data,
          redirect: false,
        })
        .then((response) => {
          console.log(response);

          // Check if the response contains user data and a token
          if (
            response.data.success &&
            response.data.data &&
            response.data.token
          ) {
            // Successful login
            const { data, token } = response.data;
            // Do something with the user data and token, such as storing them in local storage
            localStorage.setItem("userData", JSON.stringify(data));
            localStorage.setItem("token", token);
            // Optionally, you can redirect the user or perform additional actions here
            toast.success("Logged in!");
            router.push("/users");
          } else {
            // Handle invalid response
            console.error("Invalid response:", response.data);
            toast.error("Something went wrong!");
          }
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error("Login failed:", error);
          toast.error(error.response.data.message);
        })
        .finally(() => {
          // Regardless of the outcome (success or failure), stop loading
          setIsLoading(false);
        });
    }

    // if (variant === "LOGIN") {
    //   signIn("credentials", {
    //     ...data,
    //     redirect: false,
    //   })
    //     .then((callback) => {
    //       if (callback?.error) {
    //         toast.error("Invalid credentials");
    //       }

    //       if (callback?.ok && !callback?.error) {
    //         toast.success("Logged in!");
    //       }
    //     })
    //     .finally(() => setIsLoading(false));
    // }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Logged in!");
          router.push("/users");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className="
 
  sm:w-full
  sm:max-w-md
  "
    >
      <div
        className="
     bg-white
      px-4
     sm:rounded-lg
     sm:px-10
    "
      >
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <>
              <h2 className="m-auto text-center text-skyblue font-semibold">
                Create Your Account
              </h2>
              <AuthInput
                id="firstName"
                label="First Name"
                required
                register={register}
                errors={errors}
              />
              <AuthInput
                id="lastName"
                label="Last Name"
                required
                register={register}
                errors={errors}
              />
            </>
          )}

          {variant === "LOGIN" && (
            <>
              <h2 className="m-auto text-center text-skyblue font-semibold">
                Welcome back!
              </h2>
              <p className=" m-auto text-center text-skyblue">
                Please enter your details
              </p>
            </>
          )}
          <AuthInput
            id="email"
            label="Email"
            type="email"
            required
            register={register}
            errors={errors}
          />
          <AuthInput
            id="password"
            label="Password"
            type="password"
            required
            register={register}
            errors={errors}
          />
          {variant === "LOGIN" && (
            <div className="flex justify-between items-center text-gray-500 mt-10">
              <div>
                <input type="checkbox" className="mr-1" />
                <label>Remeber Me?</label>
              </div>
              <div>
                <a href="#">Forget password?</a>
              </div>
            </div>
          )}
          {variant === "REGISTER" && (
            <AuthInput
              id="passwordConfirmation"
              label="Confirm password"
              type="password"
              required
              register={register}
              errors={errors}
            />
          )}
          <div>
            <AuthButtons disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Login" : "Register"}
            </AuthButtons>
            
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
              <div className="w-full border-t boder-gray-300" />
            </div>
            <div className=" relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>

        <div
          className="
         flex
         gap-2
         justify-center
         text-sm
         mt-6
         px-2
         text-gray-500
        
        "
        >
          <div>
            {variant === "LOGIN"
              ? "New to Chatify?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFrom;
