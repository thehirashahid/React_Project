import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./posts/context";
import Header from "./header";

ReactDOM.createRoot(document.getElementById("root")).render(

  <AppProvider>
    <Header />
    <App />
  </AppProvider>

);
