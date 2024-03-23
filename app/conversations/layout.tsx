"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";
import LoadingModal from "../components/LoadingModal";

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Function to fetch conversations
    const fetchConversations = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token"); // Retrieve JWT token from localStorage
        const response = await axios.get(
          "https://chat-backend-citu.onrender.com/api/v1/chats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setConversations(response.data);
      } catch (error) {
        console.log(error);

        console.error("Error fetching conversations:", error);
      }
    };

    // Function to fetch users
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          "https://chat-backend-citu.onrender.com/api/v1/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the functions to fetch conversations and users
    fetchConversations();
    fetchUsers();
  }, []); // Empty dependency array to ensure the effect runs only once on component mount
  // console.log(conversations);

  if (isLoading) {
    return <LoadingModal />;
  }

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
