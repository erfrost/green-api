import React, { useState } from "react";
import "./EnteringMessage.css";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { TextField } from "@mui/material";
import { sendMessage } from "../../api/messages";
import {
  apiTokenInstanceState,
  idInstanceState,
  messagesListState,
  phoneState,
} from "../../storage/atoms/main";
import { useRecoilState, useRecoilValue } from "recoil";

const EnteringMessage = () => {
  const [message, setMessage] = useState("");
  const phone = useRecoilValue(phoneState);
  const idInstance = useRecoilValue(idInstanceState);
  const apiTokenInstance = useRecoilValue(apiTokenInstanceState);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage(message, phone, idInstance, apiTokenInstance);
      setMessage("");
    }
  };

  return (
    <div className="enteringMessage">
      <div className="options">
        <SentimentSatisfiedAltIcon className="icon icon-message" />
        <UploadFileIcon className="icon icon-message" />
      </div>
      <TextField
        className="text-field-message"
        id="filled-basic"
        variant="filled"
        placeholder="Введите сообщение"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <KeyboardVoiceIcon className="icon icon-message" />
    </div>
  );
};

export default EnteringMessage;
