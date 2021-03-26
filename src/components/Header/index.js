import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Header.css";

const HeaderLink = ({ label, match, to }) => {
  const routeMatch = useRouteMatch({
    path: match || to,
  });

  return (
    <span
      className={routeMatch ? "header__link--active" : "header__link--inactive"}
    >
      <Link to={to}>{label}</Link>
    </span>
  );
};

const Header = () => (
  <header className="main__header">
    <h3 className="header__title">Phasmophobia Toolbox</h3>
    <span className="header__links">
      <HeaderLink to={"/investigation"} label="Investigation" />
      <HeaderLink match={"/randomizer"} to={"/randomizer"} label="Randomizer" />
    </span>
  </header>
);

export default Header;
