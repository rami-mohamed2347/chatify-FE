"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "../Modal";
import { useState } from "react";
import Input from "../inputs/Input";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import Button from "../Button";
import { User } from "@prisma/client";

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: any;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  currentUser,
}) => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: currentUser?.firstName,
      image: currentUser?.avatar,
    },
  });

  const avatar = watch("avatar");

  const handleUpload = (result: any) => {
    setValue("avatar", result?.info?.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);

    const token = localStorage.getItem("token");

    axios
      .put("https://chat-backend-citu.onrender.com/api/v1/users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {



        router.refresh();
        onClose();
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => setIsloading(false));
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit your Information
            </p>

            <div
              className="
             mt-10
             flex
             flex-col
             gap-y-8
            "
            >
              <Input
                disabled={isLoading}
                label="Name"
                id="firstName"
                errors={errors}
                required
                register={register}
              />
              <div>
                <label
                  className="
                  block
                  text-sm
                  font-medium
                  leading-6
                  text-gray-900
                 "
                >
                  Photo
                </label>
                <div
                  className="
                 mt-2
                 flex
                 items-center
                 gap-x-3
                "
                >
                  <Image
                    width="48"
                    height="48"
                    className="rounded-full"
                    src={
                      avatar || currentUser?.avatar || "/images/placeholder.jpg"
                    }
                    alt="Avatar"
                  />
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="kqsh8wa4"
                  >
                    <Button disabled={isLoading} secondary type="button">
                      Change
                    </Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
            mt-6
            flex
            items-center
            justify-end
            gap-x-6
           "
          >
            <Button disabled={isLoading} secondary onClick={onClose}>
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default SettingsModal;
