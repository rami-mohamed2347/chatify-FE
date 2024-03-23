import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import axios from "axios";

import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const token = localStorage.getItem("token");
  console.log(token);

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "https://chat-backend-citu.onrender.com/api/v1/auth/logout",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear user data and token from localStorage
      localStorage.removeItem("userData");
      localStorage.removeItem("token");

      // Redirect user to the home page
      window.location.href = "/";
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: logout,
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
