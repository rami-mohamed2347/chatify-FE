"use client";
import React, { useState, useEffect } from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

import axios from "axios";

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isOnline: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface SidebarProps {
  children: React.ReactNode;
}

function Sidebar({ children }: SidebarProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const userDataJson = localStorage.getItem("userData");

        if (token && userDataJson) {
          const userData: any = JSON.parse(userDataJson);
          const userId: string = userData._id;

          const response = await axios.get(
            `https://chat-backend-citu.onrender.com/api/v1/users/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setCurrentUser(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <div className="h-full">
      {currentUser && <DesktopSidebar currentUser={currentUser} />}
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
