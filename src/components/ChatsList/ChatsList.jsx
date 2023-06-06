import React, { useState } from "react";
import "./ChatsList.css";
import Navigation from "../navigation/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckIcon from "@mui/icons-material/Check";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { InputAdornment, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { chatsListState, phoneState } from "../../storage/atoms/main";
import { transformPhone } from "../../utils/transformPhone";

const ChatsList = () => {
  const [input, setInput] = useState("");
  const [, setNumber] = useRecoilState(phoneState);
  const [chatsList, setChatsList] = useRecoilState(chatsListState);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      setNumber(input);
      setChatsList((prevState) => {
        console.log(prevState, input);
        if (!prevState.find((item) => item === input))
          return [...prevState, input];
        else return prevState;
      });
    }
  };

  return (
    <div className="chatsList-main">
      <Navigation />
      <div className="search">
        <TextField
          className="text-field"
          id="filled-basic"
          variant="filled"
          placeholder="Номер телефона получателя"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddIcCallIcon
                  fontSize="small"
                  sx={{ color: "rgb(174, 186, 193)" }}
                />
              </InputAdornment>
            ),
          }}
        />

        <CheckIcon
          onClick={() => {
            setNumber(input),
              setChatsList((prevState) => {
                console.log(prevState, input);
                if (!prevState.find((item) => item === input))
                  return [...prevState, input];
                else return prevState;
              });
          }}
          className="icon"
        />
      </div>
      {chatsList.length ? (
        <div className="chats">
          {chatsList.map((item, index) => (
            <div
              className="chatsList-item"
              onClick={() => setNumber(item)}
              key={index}
            >
              <AccountCircleIcon
                className="icon chatsList-icon"
                sx={{ fontSize: "3rem" }}
              />
              <div className="chatsList-phone">{transformPhone(item)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-chats">
          <div style={{ fontSize: "14px" }}>Нет чатов</div>
        </div>
      )}
    </div>
  );
};

export default ChatsList;
