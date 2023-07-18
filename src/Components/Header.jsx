import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const { user } = useAuth();

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  return (
    <div className="sticky top-0">
      <header className="mobile-menu-parent-position laptop-header-position z-30 sticky top-0">
        <div className="custom-container sticky top-0">
          <div className="header-custom-row">
            <div className="custom-column">
              <img src={logo} className="custom-logo" alt="Logo" />
            </div>
            <div className="custom-column">
              <ul className="custom-laptop-menu">
                <Link to="/">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
                <Link to="/about">
                  <i className="fa-solid fa-address-card"></i> About Me
                </Link>
                <Link to="/skills">
                  <i className="fa-solid fa-code"></i> Skills
                </Link>
                <Link to="/projects">
                  <i className="fa-solid fa-diagram-project"></i> Projects
                </Link>
                <Link to="/blogs">
                  <i className="fa-solid fa-newspaper"></i> Blogs
                </Link>
                <Link to="/contact">
                  <i className="fa-solid fa-phone"></i> Contact
                </Link>
                <Link to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
              </ul>
            </div>
            <div>
              {mobileMenu ? (
                <button onClick={handleMobileMenu} className="flex justify-center items-center custom-mobile-menu">
                  <i className="fa-solid fa-bars"></i>
                </button>
              ) : (
                <div className="mobile-menu-position w-60 h-80 pl-12 pr-20 rounded z-30">
                  <div onClick={handleMobileMenu}>
                    <button>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div className="grid grid-cols-1 justify-start gap-4 mt-4 mobile-menu overflow-auto">
                      <Link to="/">
                        <i className="fa-solid fa-house"></i> Home
                      </Link>
                      <Link to="/about">
                        <i className="fa-solid fa-address-card"></i> About Me
                      </Link>
                      <Link to="/skills">
                        <i className="fa-solid fa-code"></i> Skills
                      </Link>
                      <Link to="/projects">
                        <i className="fa-solid fa-diagram-project"></i> Projects
                      </Link>
                      <Link to="/blogs">
                        <i className="fa-solid fa-newspaper"></i> Blogs
                      </Link>
                      <Link to="/contact">
                        <i className="fa-solid fa-phone"></i> Contact
                      </Link>
                      <Link to="/login">
                        <i className="fa-solid fa-right-to-bracket"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
