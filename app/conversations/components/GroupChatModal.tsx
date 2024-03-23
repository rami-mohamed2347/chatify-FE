"use client";

import Button from "@/app/components/Button";
import Modal from "@/app/components/Modal";
import Input from "@/app/components/inputs/Input";
import Select from "@/app/components/inputs/Select";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: any[];
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
}) => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const token = localStorage.getItem("token");


  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);
    const usersIds = data.members.map((member: { value: any }) => member.value);

    axios
      .post(
        "https://chat-backend-citu.onrender.com/api/v1/chats/createGroup",
        {
          name: data.name,
          users: usersIds,
          isGroup: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
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
          <div className="border-b boder-gray-900/10 pb-12">
            <h2
              className="
                  text-base
                  font-semibold
                  leading-7
                  text-gray-900
                "
            >
              Create a Group chat
            </h2>
            <p
              className="
              mt-1
              text-sm
              leading-6
              text-gray-600
             "
            >
              Create a chat with more than 2 people.
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
                register={register}
                label="Name"
                id="name"
                disabled={isLoading}
                required
                errors={errors}
              />
              <Select
                disabled={isLoading}
                label="members"
                options={users.map((user) => ({
                  value: user._id,
                  label: user.firstName,
                }))}
                onChange={(value) =>
                  setValue("members", value, {
                    shouldValidate: true,
                  })
                }
                value={members}
              />
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
          <Button
            disabled={isLoading}
            onClick={onClose}
            type="button"
            secondary
          >
            Cancel
          </Button>
          <Button disabled={isLoading} type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GroupChatModal;
