import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[30px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    blue_gray_900_01: "bg-blue_gray-900_01 text-gray-100",
    blue_400: "bg-blue-400 text-gray-100",
    yellow_800: "bg-yellow-800 text-gray-100",
    blue_gray_900_03: "bg-blue_gray-900_03 text-gray-100",
  },
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
    blue_gray_900:
      "border border-blue_gray-900 border-solid text-blue_gray-900",
  },
};
const sizes = { xs: "p-4", sm: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "blue_gray_900_01",
    "blue_400",
    "yellow_800",
    "blue_gray_900_03",
    "blue_gray_900",
  ]),
};

export { Button };
