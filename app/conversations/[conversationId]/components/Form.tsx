"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from "next-cloudinary";

const Form = () => {
  const { conversationId } = useConversation();
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      body: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("body", "", { shouldValidate: true });
    axios.post(
      "https://chat-backend-citu.onrender.com/api/v1/messages",
      {
        ...data,
        chatId: conversationId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const handleUpload = (result: any) => {
    axios.post(
      "https://chat-backend-citu.onrender.com/api/v1/messages",
      {
        image: result?.info?.secure_url,
        chatId: conversationId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  return (
    <div
      className="
     py-4
     px-4
     bg-white
     boder-t
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
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="body"
          register={register}
          errors={errors}
          required
          placeholder="Type a message"
        />
        <button
          type="submit"
          className="
         rounded-full
         p-2
         bg-sky-500
         cursor-pointer
         hover:bg-sky-600
         transition
        "
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
