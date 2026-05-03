import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { StateProvider } from "./context/StateProvider.jsx";
import reducer, { initialState } from "./context/reducer.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </StrictMode>
  </BrowserRouter>,
);
