import React from "react";
import { Icon } from "../Icon";
import "../../styles/Tools.css";

const GHOST_NAMES = {
  male: [
    "Charles",
    "Christopher",
    "Daniel",
    "David",
    "Donald",
    "George",
    "James",
    "John",
    "Joseph",
    "Kenneth",
    "Mark",
    "Michael",
    "Paul",
    "Richard",
    "Robert",
    "Steven",
    "Thomas",
    "William",
  ],
  female: [
    "Barbara",
    "Betty",
    "Carol",
    "Donna",
    "Dorothy",
    "Elizabeth",
    "Helen",
    "Jennifer",
    "Karen",
    "Linda",
    "Lisa",
    "Margaret",
    "Maria",
    "Mary",
    "Nancy",
    "Patricia",
    "Ruth",
    "Sandra",
    "Susan",
  ],
  surname: [
    "Anderson",
    "Brown",
    "Clark",
    "Davis",
    "Garcia",
    "Harris",
    "Jackson",
    "Johnson",
    "Jones",
    "Martin",
    "Martinez",
    "Miller",
    "Moore",
    "Robinson",
    "Smith",
    "Taylor",
    "Thomas",
    "Thompson",
    "Williams",
    "Wilson",
    "White",
  ],
};

const FIRST_NAMES = [...GHOST_NAMES.male, ...GHOST_NAMES.female];
const FIRST_NAME_FIRST_LETTERS = [
  ...new Set(FIRST_NAMES.map((name) => name.slice(0, 1))),
].sort();
const SURNAME_FIRST_LETTERS = [
  ...new Set(GHOST_NAMES.surname.map((name) => name.slice(0, 1))),
].sort();

export const Tools = () => {
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
    <div className="Tools-container">
      <span className="Tools-label">
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
          classes={["Tools-results-reset", "size-medium"]}
          icon="backspace"
        />
      )}
      <span className="Tools-results">
        {!firstName && firstNameFirstLetter && `[${firstNameFirstLetter}]`}
        {firstName} {!surname && surnameFirstLetter && `[${surnameFirstLetter}]`}
        {surname}
      </span>
      <span className="Tools-options">
        {!firstNameFirstLetter &&
          FIRST_NAME_FIRST_LETTERS.map((x) => (
            <span
              key={x}
              onClick={() => setFirstLetter(x)}
              className="Tools-item"
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
              className="Tools-item"
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
              className="Tools-item"
            >
              {x}
            </span>
          ))}
        {firstName &&
          surnameFirstLetter &&
          !surname &&
          filteredSurnames.map((x) => (
            <span key={x} onClick={() => setSurname(x)} className="Tools-item">
              {x}
            </span>
          ))}
      </span>
    </div>
  );
};
