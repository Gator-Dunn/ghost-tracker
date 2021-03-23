import classNames from "classnames";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Header.css";

const HeaderLink = ({ label, match, to }) => {
  const routeMatch = useRouteMatch({
    path: match || to,
  });

  return (
    <span className={routeMatch ? "header__link--active" : "header__link--inactive"}>
      <Link to={to}>{label}</Link>
    </span>
  );
};

const HeaderSubLink = ({ label, to }) => {
  const match = useRouteMatch({
    path: to,
  });
  return (
    <span
      className={classNames("randomizer__section_link", {
        "randomizer__section_link--active": match,
        "randomizer__section_link--inactive": !match,
      })}
    >
      <Link to={to}>{label}</Link>
    </span>
  );
};

const Header = () => {
  const baseMatch = useRouteMatch({
    path: "/",
  });

  const investigationMatch = useRouteMatch({
    path: "/investigation",
  });

  return (
    <header className="main__header">
      <h3 className="header__title">Phasmophobia Toolbox</h3>
      <span className="header__links">
        <HeaderLink
          to={"/investigation"}
          label="Investigation"
        />
        <HeaderLink match={"/randomizer"} to={"/randomizer/all"} label="Randomizer" />
        {!investigationMatch && (
          <div>
            <HeaderSubLink
              to={"/randomizer/all"}
              label="All Items"
            />
            <HeaderSubLink
              to={"/randomizer/evidence"}
              label="Evidence"
            />
            <HeaderSubLink
              to={"/randomizer/objectives"}
              label="Objectives"
            />
            <HeaderSubLink
              to={"/randomizer/junk"}
              label="Junk"
            />
          </div>
        )}
      </span>
    </header>
  );
};

export default Header;
