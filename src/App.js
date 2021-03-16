import React from "react";
import classNames from "classnames";
import Tools from "./components/Tools";
import Header from "./components/Header";
import Evidence from "./components/Evidence";
import Ghosts from "./components/Ghosts";
import GhostName from "./components/GhostName";
import SecondaryEvidence from "./components/SecondaryEvidence";
import Version from './components/Version';
import { StoreProvider } from "./StoreProvider";

function App() {
  const sections = [
    {
      class: "ghostName",
      render: <GhostName />,
    },
    {
      class: "evidence",
      render: <Evidence />,
    },
    {
      class: "ghosts",
      render: <Ghosts />,
    },
    {
      class: "tools",
      render: <Tools />,
    },
    {
      class: "secondaryEvidence",
      render: <SecondaryEvidence />,
    },
    {
      class: 'version',
      render: <Version />,
    }
  ];

  return (
    <StoreProvider>
      <main className="main">
        <Header className="main__header"></Header>
        {sections.map((section) => (
          <section
            className={classNames("main__section", `main__${section.class}`)}
            key={section.class}
          >
            {section.render}
          </section>
        ))}
      </main>
    </StoreProvider>
  );
}

export default App;
