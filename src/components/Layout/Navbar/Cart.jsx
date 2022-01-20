import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import cx from "classnames";

export default function Cart({isActive}) {
  const classCart = cx({
    "fs-5": true,
    "not-active": !isActive,
    "text-white": isActive,
  });

  return (
    <div className={classCart}>
      <FaShoppingCart /> <sup>3</sup>
    </div>
  );
}
