"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
  user?: any;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isOnline = user?.isOnline;
  const isActive = members.indexOf(user?.email!) !== -1;
  // console.log(user);

  return (
    <div className="relative">
      <div
        className="
    relative
    inline-block
    rounded-full
    overflow-hidden
    h-9
    w-9
    md:h-11
    md:w-11
    "
      >
        <Image
          alt="Avatar"
          src={user?.avatar || "/images/placeholder.jpg"}
          fill
        />
      </div>
      {isOnline && (
        <span
          className="
      absolute
      block
      rounded-full
      bg-green-500
      ring-2
      ring-white
      top-0
      right-0
      h-2
      w-2
      md:h-3
      md:w-3
      "
        />
      )}
    </div>
  );
};

export default Avatar;
