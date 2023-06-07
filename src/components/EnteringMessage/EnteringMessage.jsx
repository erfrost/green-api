import React, { useState } from "react";
import "./EnteringMessage.css";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { TextField } from "@mui/material";
import {
  apiTokenInstanceState,
  idInstanceState,
  phoneState,
} from "../../storage/atoms/main";
import { useRecoilValue } from "recoil";
import { sendMessage } from "../../api/send";
import ErrorAlert from "../ErrorAlert/ErrorAlert";

const EnteringMessage = () => {
  const [message, setMessage] = useState("");
  const phone = useRecoilValue(phoneState);
  const idInstance = useRecoilValue(idInstanceState);
  const apiTokenInstance = useRecoilValue(apiTokenInstanceState);
  const [error, setError] = useState(false);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      try {
        setMessage("");
        await sendMessage(message, phone, idInstance, apiTokenInstance);
      } catch (error) {
        setError(true);
      }
    }
  };

  return (
    <>
      <div className="enteringMessage">
        {error ? (
          <ErrorAlert
            title="Произошла ошибка"
            type="error"
            setState={setError}
          />
        ) : null}
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
    </>
  );
};

export default EnteringMessage;
