import React, { useState } from "react";
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
import { getMessage } from "../../api/get";
import { deleteMessage } from "../../api/delete";
import { transformDate } from "../../utils/transformDate";
import ErrorAlert from "../ErrorAlert/ErrorAlert";

const ChatArea = () => {
  const phone = useRecoilValue(phoneState);
  const idInstance = useRecoilValue(idInstanceState);
  const apiTokenInstance = useRecoilValue(apiTokenInstanceState);
  const [messagesList, setMessagesList] = useRecoilState(messagesListState);
  const [error, setError] = useState(false);

  async function get() {
    if (phone && idInstance && apiTokenInstance) {
      try {
        const data = await getMessage(idInstance, apiTokenInstance);
        if (data !== null) {
          if (data.body.messageData) {
            setMessagesList((prevState) => {
              if (!prevState.find((item) => item.id === data.receiptId)) {
                return [
                  ...prevState,
                  {
                    id: data.receiptId,
                    message: data?.body?.messageData?.extendedTextMessageData
                      ?.text
                      ? data.body.messageData.extendedTextMessageData.text
                      : data.body.messageData.textMessageData.textMessage,
                    type:
                      data.body.typeWebhook === "outgoingAPIMessageReceived"
                        ? "outgoing"
                        : "incoming",
                    phone: data.body.senderData.chatId.slice(0, -5),
                    time: transformDate(data.body.timestamp),
                  },
                ];
              } else return prevState;
            });
          }
          const response = await deleteMessage(
            data.receiptId,
            idInstance,
            apiTokenInstance
          );
        } else return;
      } catch (error) {
        setError(true);
      }
    } else return;
  }

  setInterval(get, 5000);

  return (
    <div className="chatArea-main">
      <AreaHeader />
      {phone && idInstance && apiTokenInstance ? (
        <>
          {" "}
          <div className="chat-main">
            {error ? (
              <ErrorAlert
                title="Произошла ошибка"
                type="error"
                setState={setError}
              />
            ) : (
              <div className="chat">
                {messagesList.map((item) =>
                  item.phone === phone ? (
                    <div
                      className="message-container"
                      style={
                        item.type == "outgoing"
                          ? { justifyContent: "flex-end" }
                          : { justifyContent: "flex-start" }
                      }
                      key={item.id}
                    >
                      <div className="message">
                        {item.message}
                        <div className="time">{item.time}</div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            )}
          </div>
          <EnteringMessage />
        </>
      ) : (
        <div className="empty-params">Выберите номер телефона получателя</div>
      )}
    </div>
  );
};

export default ChatArea;
