import React, { useState } from "react";
import "./ChatsList.css";
import Navigation from "../navigation/navigation";
import CheckIcon from "@mui/icons-material/Check";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { phoneState } from "../../storage/atoms/main";

const ChatsList = () => {
  const [input, setInput] = useState("");
  const [number, setNumber] = useRecoilState(phoneState);

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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgb(174, 186, 193)" }} />
              </InputAdornment>
            ),
          }}
        />
        <IconButton className="icon-button" onClick={() => setNumber(input)}>
          <CheckIcon sx={{ color: "rgb(174, 186, 193)" }} />
        </IconButton>
      </div>
      <div className="chats">
        <div style={{ fontSize: "14px" }}>Нет чатов</div>
      </div>
    </div>
  );
};

export default ChatsList;
