import { Logo } from '../logo/Logo';
import './LandingPageHeader.css';
import React from 'react';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';


const useState(initialValue) {
  let val = initialValue
  function change(newValue) {
    val = newValue
  }
  return [val, change]
}
export const LandingPageHeader = () => {
 const state = React.useState(false);
  } 

  const toggleMenu = () => {
    setMenu(showMenu === false);
  };
  return (
    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>
      <MenuIcon onClick={toggleMenu} fill="white" />
      {showMenu && (
        <div className="menu">
          <HeaderNavigation />
        </div>
      )}
    </header>
  );
};

const HeaderNavigation = () => {
  return (
    <ul>
      <li>
        <a href="#/Premium">Premium</a>
      </li>
      <li>
        <a href="#/Support"> Support</a>
      </li>
      <li>
        <a href="#/Download">Download</a>
      </li>
      <li>|</li>
      <li className="active">
        <a href="#/Sign up">Sign up</a>
      </li>
      <li className="active">
        <a href="#/Log in">Log in</a>
      </li>
    </ul>
  );
};
