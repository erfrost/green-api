import { RecoilRoot } from "recoil";
import "./App.css";
import AlertWindow from "./components/AlertWindow/AlertWindow";
import ChatArea from "./components/ChatArea/ChatArea";
import ChatsList from "./components/chatsList/chatsList";

function App() {
  return (
    <RecoilRoot>
      <div className="main">
        <div className="container">
          <AlertWindow />
          <ChatsList />
          <ChatArea />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
