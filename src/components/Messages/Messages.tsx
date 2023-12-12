type Props = {
  messages: string[];
};

const Messages = ({ messages }: Props) => {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </>
  );
};

export default Messages;
