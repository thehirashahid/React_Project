import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./posts/context";
import { AuthProvider } from "./registration/authentication/authProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </AuthProvider>
);
