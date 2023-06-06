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
  default: "1101828009",
});
export const apiTokenInstanceState = atom({
  key: "apiTokenInstanceState",
  default: "52c71a182ff34eed9bb87e757e33aca33ca372f2997645c294",
});
export const messagesListState = atom({
  key: "messagesListState",
  default: [],
});
