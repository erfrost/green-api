import { atom } from "recoil";

export const phoneState = atom({
  key: "phoneState",
  default: "",
});
export const idInstanceState = atom({
  key: "idInstanceState",
  default: "1101827773",
});
export const apiTokenInstanceState = atom({
  key: "apiTokenInstanceState",
  default: "43ca18e51314489a8ed1020a54f5fd8ef45043eab43d407ea1",
});
export const messagesListState = atom({
  key: "messagesListState",
  default: [],
});
