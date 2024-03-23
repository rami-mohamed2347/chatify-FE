import { useMemo } from "react";
import { FullConversationType } from "../types";
import { User } from "@prisma/client";

const useOtherUser = (
  conversation:
    | FullConversationType
    | {
        users: User[];
      }
) => {
  const userData = localStorage.getItem("userData");
  const currentUserEmail = userData ? JSON.parse(userData).email : null;

  const otherUser = useMemo(() => {
    if (!currentUserEmail) return null;

    const otherUser = conversation.users?.find(
      (user) => user.email !== currentUserEmail
    );

    return otherUser;
  }, [currentUserEmail, conversation.users]);

  return otherUser;
};

export default useOtherUser;
