import React from "react";
import Button from "components/Button";
import TextIcon from "./textIcon";
import { useLocation } from "react-router-dom";

const Header = props => {
  const location = useLocation();
  const getClassLink = path => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <TextIcon />
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${getClassLink("/")}`}>
                <Button href="/" type="link" className="nav-link">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getClassLink("/browse-by")}`}>
                <Button href="/browse-by" type="link" className="nav-link">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getClassLink("/stories")}`}>
                <Button href="/stories" type="link" className="nav-link">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getClassLink("/agents")}`}>
                <Button href="/agents" type="link" className="nav-link">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
