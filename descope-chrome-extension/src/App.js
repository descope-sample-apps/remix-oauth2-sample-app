import React from "react";
import { AuthProvider, Descope } from "@descope/react-sdk";

function App() {
  return (
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
}

export default App;
