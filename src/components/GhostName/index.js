import React from "react";
import Icon from "../Icon";
import {
  FIRST_NAMES,
  FIRST_NAME_FIRST_LETTERS,
  GHOST_NAMES,
  SURNAME_FIRST_LETTERS,
} from "./constants";
import "./GhostName.css";

const GhostName = () => {
  const [firstNameFirstLetter, setFirstLetter] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [surnameFirstLetter, setSurnameFirstLetter] = React.useState();
  const [surname, setSurname] = React.useState();

  const filteredFirstNames = React.useMemo(
    () => FIRST_NAMES.filter((x) => x.slice(0, 1) === firstNameFirstLetter),
    [firstNameFirstLetter]
  );

  const filteredSurnames = React.useMemo(
    () =>
      GHOST_NAMES.surname.filter((x) => x.slice(0, 1) === surnameFirstLetter),
    [surnameFirstLetter]
  );

  const handleClick = () => {
    setFirstLetter();
    setFirstName();
    setSurnameFirstLetter();
    setSurname();
  };
  const show = React.useMemo(
    () => ({
      firstNameFirstLetter:
        !firstNameFirstLetter && !firstName && !surnameFirstLetter && !surname,
      firstName:
        firstNameFirstLetter && !firstName && !surnameFirstLetter && !surname,
      surnameFirstLetter:
        firstNameFirstLetter && firstName && !surnameFirstLetter && !surname,
      surname:
        firstNameFirstLetter && firstName && surnameFirstLetter && !surname,
      any: firstNameFirstLetter || firstName || surnameFirstLetter || surname,
      all: firstNameFirstLetter && firstName && surnameFirstLetter && surname,
    }),
    [firstName, firstNameFirstLetter, surname, surnameFirstLetter]
  );

  return (
    <span className="ghostname__container">
      <span className="ghostname__label">
        {show.firstNameFirstLetter &&
          "Select First Letter of Ghost's First Name"}
        {show.firstName && "Select Ghost's First Name"}
        {show.surnameFirstLetter && "Select First Letter of Ghost's Last Name"}
        {show.surname && "Select Ghost's Last Name"}
        {show.all && "Ghost Name"}
      </span>
      {show.any && (
        <Icon
          onClick={handleClick}
          classes={["ghostname__results-reset", "size-medium"]}
          icon="backspace"
        />
      )}
      <span className="ghostname__results">
        {!firstName && firstNameFirstLetter && `[${firstNameFirstLetter}]`}
        {firstName}{" "}
        {!surname && surnameFirstLetter && `[${surnameFirstLetter}]`}
        {surname}
      </span>
      <span className="ghostname__options">
        {!firstNameFirstLetter &&
          FIRST_NAME_FIRST_LETTERS.map((x) => (
            <span
              key={x}
              onClick={() => setFirstLetter(x)}
              className="ghostname__item"
            >
              {x}
            </span>
          ))}
        {firstNameFirstLetter &&
          !firstName &&
          filteredFirstNames.map((x) => (
            <span
              key={x}
              onClick={() => setFirstName(x)}
              className="ghostname__item"
            >
              {x}
            </span>
          ))}
        {firstName &&
          !surnameFirstLetter &&
          SURNAME_FIRST_LETTERS.map((x) => (
            <span
              key={x}
              onClick={() => setSurnameFirstLetter(x)}
              className="ghostname__item"
            >
              {x}
            </span>
          ))}
        {firstName &&
          surnameFirstLetter &&
          !surname &&
          filteredSurnames.map((x) => (
            <span
              key={x}
              onClick={() => setSurname(x)}
              className="ghostname__item"
            >
              {x}
            </span>
          ))}
      </span>
    </span>
  );
};

export default GhostName;
