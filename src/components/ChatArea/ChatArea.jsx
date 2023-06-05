import React, { useEffect, useState } from "react";
import "./ChatArea.css";
import AreaHeader from "../AreaHeader/AreaHeader";
import EnteringMessage from "../enteringMessage/EnteringMessage";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  apiTokenInstanceState,
  idInstanceState,
  messagesListState,
  phoneState,
} from "../../storage/atoms/main";
import { deleteMessage, getMessage } from "../../api/messages";

const ChatArea = () => {
  const phone = useRecoilValue(phoneState);
  const idInstance = useRecoilValue(idInstanceState);
  const apiTokenInstance = useRecoilValue(apiTokenInstanceState);
  const [messagesList, setMessagesList] = useRecoilState(messagesListState);

  const get = async () => {
    if (phone && idInstance && apiTokenInstance) {
      try {
        const data = await getMessage(idInstance, apiTokenInstance);
        console.log(data);
        if (data !== null) {
          setMessagesList((prevState) => [
            ...prevState,
            {
              message: data.body.messageData,
              type: "outgoing",
            },
          ]);

          const response = await deleteMessage(
            data.receiptId,
            idInstance,
            apiTokenInstance
          );
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(messagesList);

  setInterval(get, 5000);

  return (
    <div className="chatArea-main">
      <AreaHeader />
      {phone && idInstance && apiTokenInstance ? (
        <>
          {" "}
          <div className="chat"></div>
          <EnteringMessage />
        </>
      ) : (
        <div className="empty-params">Укажите номер телефона получателя</div>
      )}
    </div>
  );
};

export default ChatArea;
