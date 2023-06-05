import React from "react";
import "./Navigation.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

const Navigation = () => {
  return (
    <div className="navigation-main">
      <div>
        <AccountCircleIcon className="icon" sx={{ fontSize: "3rem" }} />
      </div>
      <div className="icon-group">
        <GroupsIcon className="icon" />

        <DataUsageIcon className="icon" />

        <ChatIcon className="icon" />

        <MoreVertIcon className="icon" />
      </div>
    </div>
  );
};

export default Navigation;
