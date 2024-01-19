import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./bearHeader.scss";
import LogoImage from "../../image/logo.png";
import HamburgerIcon from "../../image/hamburger.svg";
import CloseIcon from "../../image/close.svg";

export default function BearHeader({ handleNavClick }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarMenu = () => {
    setShowSidebar(!showSidebar);
  };

  const handleMobileNavClick = (index) => {
    setShowSidebar(false);
    handleNavClick(index);
  };

  return (
    <div className="bear-header">
      <Container className="header-container">
        <img src={LogoImage} alt={"logo"} className="logo-image" />
        <div className="category-wrapper">
          <p className="category" onClick={() => handleNavClick(0)}>
            Buy
          </p>
          <p className="category" onClick={() => handleNavClick(1)}>
            Roadmap
          </p>
          <p className="category" onClick={() => handleNavClick(2)}>
            Connect
          </p>
          <p className="category" onClick={() => handleNavClick(3)}>
            Rarities
          </p>
          <p className="category" onClick={() => handleNavClick(4)}>
            Team
          </p>
          <p className="category" onClick={() => handleNavClick(5)}>
            FAQ
          </p>
        </div>
        <img
          src={HamburgerIcon}
          alt={"hamburger-icon"}
          className="hamburger"
          onClick={() => showSidebarMenu()}
        />
      </Container>
      {showSidebar && (
        <div className="side-nav">
          <img src={LogoImage} alt={"mobile-logo"} className="mobile-logo" />
          <img
            src={CloseIcon}
            alt={"close"}
            className="close"
            onClick={() => showSidebarMenu()}
          />
          <p className="side-category" onClick={() => handleMobileNavClick(0)}>
            Buy
          </p>
          <p className="side-category" onClick={() => handleMobileNavClick(1)}>
            Roadmap
          </p>
          <p className="side-category" onClick={() => handleMobileNavClick(2)}>
            Connect
          </p>
          <p className="side-category" onClick={() => handleMobileNavClick(3)}>
            Rarities
          </p>
          <p className="side-category" onClick={() => handleMobileNavClick(4)}>
            Team
          </p>
          <p className="side-category" onClick={() => handleMobileNavClick(5)}>
            FAQ
          </p>
        </div>
      )}
    </div>
  );
}
