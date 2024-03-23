"use client";

import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface UserBoxProps {
  data: any;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {


  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    const token = localStorage.getItem("token");

    axios
      .post(
        "https://chat-backend-citu.onrender.com/api/v1/chats/createChatPrivate",
        {
          receiverId: data._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        router.push(`/conversations/${data.data.chat._id}`);

      })
      .finally(() => setIsLoading(false));
  }, [data, router]);
  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={handleClick}
        className="
    w-full
    relative
    flex
    items-center
    space-x-3
    bg-white
    p-3
    hover:bg-skyblue
    rounded-lg
    transition
    cursor-pointer
    "
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div
              className="
            flex
            justify-between
            items-center
            mb-1
            "
            >
              <p
                className="
                text-sm
                font-medium
                text-gray-600
                "
              >
                {data.firstName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
