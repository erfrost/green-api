import { atom } from "recoil";

export const chatsListState = atom({
  key: "chatsListState",
  default: [],
});
export const phoneState = atom({
  key: "phoneState",
  default: "",
});
export const idInstanceState = atom({
  key: "idInstanceState",
  default: "",
});
export const apiTokenInstanceState = atom({
  key: "apiTokenInstanceState",
  default: "",
});
export const messagesListState = atom({
  key: "messagesListState",
  default: [],
});
