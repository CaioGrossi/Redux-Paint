import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store";
import { CanvasProvider } from "./CanvasContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CanvasProvider>
        <App />
      </CanvasProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
