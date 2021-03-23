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
    path: "/ghost-tracker",
  });

  const investigationMatch = useRouteMatch({
    path: "/ghost-tracker/investigation",
  });

  return (
    <header className="main__header">
      <h3 className="header__title">Phasmophobia Toolbox</h3>
      <span className="header__links">
        <HeaderLink
          to={`${baseMatch.path}/investigation`}
          label="Investigation"
        />
        <HeaderLink match={`${baseMatch.path}/randomizer`} to={`${baseMatch.path}/randomizer/all`} label="Randomizer" />
        {!investigationMatch && (
          <div>
            <HeaderSubLink
              to={`${baseMatch.path}/randomizer/all`}
              label="All Items"
            />
            <HeaderSubLink
              to={`${baseMatch.path}/randomizer/evidence`}
              label="Evidence"
            />
            <HeaderSubLink
              to={`${baseMatch.path}/randomizer/objectives`}
              label="Objectives"
            />
            <HeaderSubLink
              to={`${baseMatch.path}/randomizer/junk`}
              label="Junk"
            />
          </div>
        )}
      </span>
    </header>
  );
};

export default Header;
