import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.hasShadow) className.push("btn-shadow");
  if (props.isSmall) className.push("btn-sm");
  if (props.isLarge) className.push("btn-lg");
  if (props.isBlock) className.push("btn-block");

  //   event click check
  const onClick = () => {
    if (props.onClick) onClick();
  };

  //   btn type check
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      <Link
        to={props.href}
        className={className.join(" ")}
        style={props.style}
        onClick={props.onClick}
      >
        {props.children}
      </Link>;
    }
  }

  return <div>Button</div>;
}

Button.propTypes = {
  type: PropTypes.oneOf(["button" | "link"]),
  onClick: PropTypes.func,
  target: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isLoading: PropTypes.bool,
  isExternal: PropTypes.bool,
  isSmall: PropTypes.bool,
  isBlock: PropTypes.bool,
  isLarge: PropTypes.bool,
  hasShadow: PropTypes.bool,
};
