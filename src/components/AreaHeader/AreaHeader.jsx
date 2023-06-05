import React from "react";
import "./AreaHeader.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilValue } from "recoil";
import { phoneState } from "../../storage/atoms/main";

const AreaHeader = () => {
  const phone = useRecoilValue(phoneState);

  return (
    <div className="areaHeader">
      <div className="user-title">
        <AccountCircleIcon
          className="icon"
          sx={{ color: "rgb(174, 186, 193)", fontSize: "3rem" }}
        />

        <div className="user-name">{phone}</div>
      </div>
      <div className="options">
        <SearchIcon className="icon" sx={{ color: "rgb(174, 186, 193)" }} />

        <MoreVertIcon className="icon" sx={{ color: "rgb(174, 186, 193)" }} />
      </div>
    </div>
  );
};

export default AreaHeader;
