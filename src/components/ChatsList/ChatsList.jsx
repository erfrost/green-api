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
  const [number, setNumber] = useRecoilState(phoneState);
  const [chatsList, setChatsList] = useRecoilState(chatsListState);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      setInput("");
      setNumber(input);
      setChatsList((prevState) => transform(prevState, input));
    }
  };

  const transform = (prevState, input) => {
    if (input.length === 12 || input.length === 11) {
      if (input[0] === "8") {
        if (!prevState.find((item) => item === "7" + input.slice(1)))
          return [...prevState, "7" + input.slice(1)];
        else return prevState;
      } else if (input[0] === "+") {
        if (!prevState.find((item) => item === input.slice(1)))
          return [...prevState, input.slice(1)];
        else return prevState;
      } else if (input[0] === "7") {
        if (!prevState.find((item) => item === input))
          return [...prevState, input];
      } else return prevState;
    } else return prevState;
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
            setInput("");
            setNumber(input),
              setChatsList((prevState) => transform(prevState, input));
          }}
          className="icon"
        />
      </div>
      {chatsList.length ? (
        <div className="chats">
          {chatsList.map((item, index) => (
            <div
              className={`chatsList-item ${
                item === number ? "number-active" : ""
              }`}
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
