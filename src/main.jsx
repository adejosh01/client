import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-2g7yotyaj1vhxpl0.us.auth0.com"
      clientId="WqMfP41RSa4iiyikYJyMb2ytjMo3Dodf"
      authorizationParams={{
        redirect_uri: "https://homyz-steel.vercel.app/"
      }}
      audience="http://localhost:8008"
      scope="openid profile email"
    >
        <App />
    </Auth0Provider>    
  </React.StrictMode>
);
