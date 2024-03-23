"use client";
import React, { useEffect, useState } from "react";
import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import axios from "axios";

interface IParams {
  conversationId: string;
}

const ConversationId = ({ params }: { params: IParams }) => {
  const [conversation, setConversation] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const conversationResponse = await axios.get(
          `https://chat-backend-citu.onrender.com/api/v1/chats/${params.conversationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const messagesResponse = await axios.get(
          `https://chat-backend-citu.onrender.com/api/v1/messages/${params.conversationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        // console.log(messagesResponse);

        setConversation(conversationResponse.data[0]);
        setMessages(messagesResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.conversationId]);


  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
