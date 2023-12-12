import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

import MessageInput from "./components/MessageInput/MessageInput";
import Messages from "./components/Messages/Messages";

const CONNECT_URL = "http://localhost:8001";

function App() {
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);

  const send = (message: string) => {
    socket?.emit("message", message);
  };

  const messageListener = (message: string) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    const newSocket = io(CONNECT_URL);
    setSocket(newSocket);
  }, [setSocket]);

  useEffect(() => {
    socket?.on("message", messageListener);
    return () => {
      socket?.off("message", messageListener);
    };
  }, [socket, messageListener]);

  return (
    <>
      <MessageInput send={send} />
      <Messages messages={messages} />
    </>
  );
}

export default App;
