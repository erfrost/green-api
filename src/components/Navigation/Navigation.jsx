import React from "react";
import "./Navigation.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Tooltip } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const tabletDevice = useMediaQuery({ maxWidth: "600px" });

  return (
    <div className="navigation-main">
      <Tooltip title="Профиль" arrow>
        <AccountCircleIcon className="icon" sx={{ fontSize: "3rem" }} />
      </Tooltip>
      <div className="icon-group">
        {!tabletDevice ? (
          <>
            <Tooltip title="Сообщества" arrow>
              <GroupsIcon className="icon" />
            </Tooltip>
            <Tooltip title="Статус" arrow>
              <DataUsageIcon className="icon" />
            </Tooltip>
            <Tooltip title="Новый чат" arrow>
              <ChatIcon className="icon" />
            </Tooltip>
            <Tooltip title="Меню" arrow>
              <MoreVertIcon className="icon" />
            </Tooltip>
          </>
        ) : (
          <Tooltip title="Меню" arrow>
            <MoreVertIcon className="icon" />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default Navigation;
