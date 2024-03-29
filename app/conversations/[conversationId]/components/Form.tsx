"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from "next-cloudinary";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post("/api/messages", {
      image: result?.info?.secure_url,
      conversationId,
    });
  };
  return (
    <div
      className="
     py-4
     px-4
     bg-white
     border-t
     flex
     items-center
     gap-2
     lg:gap-2
     w-full
    "
    >
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="kqsh8wa4"
      >
        <HiPhoto size={30} className="text-skyblue  hover:text-cyan-900" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Type your message here"
        />
        <button
          type="submit"
          className="
         rounded-lg
         py-2
         px-5
         bg-skyblue
         cursor-pointer
         hover:bg-cyan-900
         transition
         flex 
        "
        >
          <span className="text-white">Send</span>
          <HiPaperAirplane size={18} className="text-white mt-1 ms-1" />
        </button>
      </form>
    </div>
  );
};

export default Form;
