import React from "react";
import "./AreaHeader.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilValue } from "recoil";
import { phoneState } from "../../storage/atoms/main";
import { transformPhone } from "../../utils/transformPhone";
import { Tooltip } from "@mui/material";

const AreaHeader = () => {
  const phone = useRecoilValue(phoneState);

  return (
    <div className="areaHeader">
      <div className="user-title">
        <Tooltip title="Профиль" arrow>
          <AccountCircleIcon
            className="icon"
            sx={{ color: "rgb(174, 186, 193)", fontSize: "3rem" }}
          />
        </Tooltip>
        <div className="user-name">{transformPhone(phone)}</div>
      </div>
      <div className="options">
        <Tooltip title="Поиск" arrow>
          <SearchIcon className="icon" sx={{ color: "rgb(174, 186, 193)" }} />
        </Tooltip>
        <Tooltip title="Еще" arrow>
          <MoreVertIcon className="icon" sx={{ color: "rgb(174, 186, 193)" }} />
        </Tooltip>
      </div>
    </div>
  );
};

export default AreaHeader;
