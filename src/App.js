import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Version from "./components/Version";
import { StoreProvider } from "./StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Header className="main__header" />
      <Main className="main" />
      <Version  className="main__version" />
    </StoreProvider>
  );
}

export default App;
