import classNames from "classnames";
import "../styles/Icon.css";

const validSizes = ["small", "medium", "large", "extra-large"];

export const Icon = ({ classes = [], icon, size = "medium", ...props }) => {
  const sizeStyle = validSizes.includes(size) ? size : "medium";
  const classesMap = classes.reduce(
    (list, c) => ({
      ...list,
      [c]: true,
    }),
    {}
  );

  return (
  <span
    {...props}
    className={classNames({
      "material-icons": true,
      [sizeStyle]: true,
      ...classesMap,
    })}
  >
    {icon}
  </span>
);
  }