// @ts-nocheck - may need to be at the start of file
import React from "react";
import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const App: React.FC = () => {
  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <>
          <h1>Hello, username: {user.email}</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Authenticator>
  );
};

export default App;
