import { selector } from "recoil";
import {
  apiTokenInstanceState,
  chatsListState,
  idInstanceState,
  messagesListState,
  phoneState,
} from "../atoms/main";

export const chatsListSelector = selector({
  key: "chatsListSelector",
  get: ({ get }) => get(chatsListState),
  set: ({ set }, value) =>
    set(chatsListState, (state) => ({ ...state, value: value })), // setter example
});
export const phoneSelector = selector({
  key: "phoneSelector",
  get: ({ get }) => get(phoneState),
  set: ({ set }, value) =>
    set(phoneState, (state) => ({ ...state, value: value })), // setter example
});
export const idInstanceSelector = selector({
  key: "idInstanceSelector",
  get: ({ get }) => get(idInstanceState),
  set: ({ set }, value) =>
    set(idInstanceState, (state) => ({ ...state, value: value })), // setter example
});
export const apiTokenInstanceSelector = selector({
  key: "apiTokenInstanceSelector",
  get: ({ get }) => get(apiTokenInstanceState),
  set: ({ set }, value) =>
    set(apiTokenInstanceState, (state) => ({ ...state, value: value })), // setter example
});
export const messageListSelector = selector({
  key: "messageListSelector",
  get: ({ get }) => get(messagesListState),
  set: ({ set }, value) =>
    set(messagesListState, (state) => ({ ...state, value: value })), // setter example
});
