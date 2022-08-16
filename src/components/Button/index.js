import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";

export default function Button(props) {
  return <div>Button</div>;
}

Button.propTypes = {
  type: PropTypes.oneOf(["button" | "link"]),
  onClick: PropTypes.func,
  target: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isExternal: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  hasShadow: PropTypes.bool,
};
