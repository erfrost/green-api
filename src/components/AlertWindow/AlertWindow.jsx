import React, { useState } from "react";
import "./AlertWindow.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useRecoilState } from "recoil";
import {
  apiTokenInstanceState,
  idInstanceState,
} from "../../storage/atoms/main";

const AlertWindow = () => {
  const [open, setOpen] = React.useState(true);
  const [idInstance, setIdInstance] = useRecoilState(idInstanceState);
  const [apiTokenInstance, setApiTokenInstance] = useRecoilState(
    apiTokenInstanceState
  );

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ color: "rgb(233, 237, 239)" }}>
        Введите idInstance и apiTokenInstance для продолжения
      </DialogTitle>
      <DialogContent>
        <div className="text-field-group">
          <TextField
            className="text-field"
            id="filled-basic"
            variant="filled"
            placeholder="idInstance"
            value={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
          />
          <TextField
            className="text-field"
            id="filled-basic"
            variant="filled"
            placeholder="apiTokenInstance"
            value={apiTokenInstance}
            onChange={(e) => setApiTokenInstance(e.target.value)}
          />
        </div>
      </DialogContent>
      <DialogActions sx={{ paddingRight: "24px" }}>
        <Button
          className="alert-btn"
          onClick={() => {
            setOpen(false);
          }}
          disabled={!idInstance || !apiTokenInstance}
          sx={
            !idInstance || !apiTokenInstance
              ? { color: "#797f82 !important" }
              : null
          }
        >
          Продолжить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertWindow;
