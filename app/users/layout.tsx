"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";
import axios from "axios";
import LoadingModal from "../components/LoadingModal";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
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
        console.log(response);
      } catch (error) {
        setError("Error loading users. Please try again later.");
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <LoadingModal />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;
