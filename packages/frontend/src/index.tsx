import "./styles/style.css";
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { CaidoSDK } from "./types";

export const init = (sdk: CaidoSDK) => {
  const rootElement = document.createElement("div");
  Object.assign(rootElement.style, {
    height: "100%",
    width: "100%",
  });

  const root = createRoot(rootElement);
  root.render(<App />);

  sdk.navigation.addPage("/example", {
    body: rootElement,
  });

  sdk.sidebar.registerItem("Example", "/example", {
    icon: "fas fa-palette",
  });
};
