import React from "react";
import "./ErrorAlert.css";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ErrorAlert = ({ title, type, setState }) => {
  setTimeout(() => setState(false), 12000);

  return (
    <Alert
      className={`alert ${type}-alert`}
      severity={type}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => setState(false)}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {title}
    </Alert>
  );
};

export default ErrorAlert;
