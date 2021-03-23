import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Version from "./components/Version";
import { StoreProvider } from "./StoreProvider";

function App() {
  return (
    <Router>
      <StoreProvider>
        <Header className="main__header" />
        <Main className="main" />
        <Version className="main__version" />
      </StoreProvider>
    </Router>
  );
}

export default App;
