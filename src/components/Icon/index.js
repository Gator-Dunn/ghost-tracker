import classNames from "classnames";
import React from "react";
import "./Icon.css";

const validSizes = ["small", "medium", "large", "extra-large"];

const Icon = ({ classes = [], icon, iconHover, size = "medium", ...props }) => {
  const [activeIcon, setActiveIcon] = React.useState();

  React.useEffect(() => setActiveIcon(icon), [icon]);

  const sizeStyle = validSizes.includes(size) ? `size-${size}` : "size-medium";
  const classesMap = classes.reduce(
    (list, c) => ({
      ...list,
      [c]: true,
    }),
    {}
  );

  return iconHover ? (
    <span
      {...props}
      className={classNames({
        "material-icons": true,
        [sizeStyle]: true,
        ...classesMap,
      })}
      onMouseEnter={() => setActiveIcon(iconHover)}
      onMouseOut={() => setActiveIcon(icon)}
    >
      {activeIcon}
    </span>
  ) : (
    <span
      {...props}
      className={classNames({
        "material-icons": true,
        [sizeStyle]: true,
        ...classesMap,
      })}
    >
      {activeIcon}
    </span>
  );
};

export default Icon;
