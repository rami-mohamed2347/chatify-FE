const EmptyState = () => {
  return (
    <div
      className="
     px-4
     py-10
     sm:px-6
     lg:-px-8
     h-full
     flex
     justify-center
     items-center
     bg-white
    "
    >
      <div className="text-center items-center flex flex-col">
        <p className="  font-semibold
            text-gray-400 text-7xl">Chatify</p>
        <h3
          className="
            mt-2
            text-2xl
            font-semibold
            text-gray-400
            "
        >
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
