import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const converstaions = await getConversations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList intialItems={converstaions} />
        {children}
      </div>
    </Sidebar>
  );
}
