import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

type Props = {
  send: (message: string) => void;
};

const MessageInput = ({ send }: Props) => {
  const [value, setValue] = useState<string>("");

  return (
    <Box display="flex" alignItems="center" gap="5px">
      <TextField
        placeholder="請輸入"
        value={value}
        variant="outlined"
        size="small"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => send(value)} variant="outlined" size="small">
        送出
      </Button>
    </Box>
  );
};

export default MessageInput;
