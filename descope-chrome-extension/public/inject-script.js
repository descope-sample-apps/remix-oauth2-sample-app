// inject-script.js
import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider, Descope } from "@descope/react-sdk";

// Define your component
const DescopeComponent = () => (
  <AuthProvider projectId="P2PqjhPcC8Hri2nXUY7fY6uy2Wri">
    <Descope
      flowId="sign-up-or-in"
      onSuccess={() => {
        console.log("Success");
      }}
      onError={(error) => {
        console.log(error);
      }}
    />
  </AuthProvider>
);

// Mount your component to a DOM node
const app = document.createElement("div");
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<DescopeComponent />, app);
