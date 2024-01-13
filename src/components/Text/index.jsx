import React from "react";

const sizeClasses = {
  txtMontserratRomanBold120: "font-bold font-montserrat",
  txtMontserratRomanSemiBold30Gray90001: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold72: "font-montserrat font-semibold",
  txtMontserratRomanBold24: "font-bold font-montserrat",
  txtMontserratRomanBold24WhiteA700: "font-bold font-montserrat",
  txtMontserratRomanRegular16WhiteA700: "font-montserrat font-normal",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtMontserratRomanBold64: "font-bold font-montserrat",
  txtMontserratRomanSemiBold36: "font-montserrat font-semibold",
  txtMontserratRomanRegular20Gray100: "font-montserrat font-normal",
  txtMontserratRomanSemiBold20Bluegray900: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold32: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold72WhiteA700: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold30: "font-montserrat font-semibold",
  txtMontserratRomanBold128: "font-bold font-montserrat",
  txtMontserratRomanRegular14Gray500: "font-montserrat font-normal",
  txtMontserratRomanRegular16Gray500: "font-montserrat font-normal",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtMontserratRomanRegular20Gray700: "font-montserrat font-normal",
  txtMontserratRomanRegular18Gray700: "font-montserrat font-normal",
  txtMontserratRomanRegular20Gray500: "font-montserrat font-normal",
  txtMontserratRomanSemiBold18WhiteA700: "font-montserrat font-semibold",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanSemiBold48Gray900: "font-montserrat font-semibold",
  txtMontserratRomanRegular18Bluegray10001: "font-montserrat font-normal",
  txtMontserratRomanBold52: "font-bold font-montserrat",
  txtMontserratRomanRegular24: "font-montserrat font-normal",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanSemiBold22Gray90001: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold48: "font-montserrat font-semibold",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtMontserratRomanRegular14Gray90003: "font-montserrat font-normal",
  txtMontserratRomanRegular20Bluegray90002: "font-montserrat font-normal",
  txtMontserratRomanLight16: "font-light font-montserrat",
  txtMontserratRomanRegular15: "font-montserrat font-normal",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold22: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtMontserratRomanMedium20: "font-medium font-montserrat",
  txtMontserratRomanMedium24: "font-medium font-montserrat",
  txtMontserratRomanLight12: "font-light font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
