import React from "react";
import "./ErrorAlert.css";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ErrorAlert = ({ setError }) => {
  return (
    <Alert
      className="error-alert"
      severity="error"
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => setError(false)}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      Произошла ошибка
    </Alert>
  );
};

export default ErrorAlert;
