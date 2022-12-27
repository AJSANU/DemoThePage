import React, { useDebugValue } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useTour } from "@reactour/tour";

const Header = ({ setStep }) => {
  const { setIsOpen } = useTour();
  const redirect = useNavigate();

  const startTour = () => {
    setStep(0);
    redirect("/");
    setIsOpen(true);
  };

  return (
    <>
      <section className="p-3 text-center" data-tour="first-step">
        <h1>
          <code>demo</code> the <code style={{color:"red"}}>OCI</code> content page tour
        </h1>
      </section>

      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_542923.png"
              alt=""
              width="50"
              height="50"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" data-tour="home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" data-tour="test123">
                <NavLink to="/Example" className="nav-link">
                  Content
                </NavLink>
              </li>
            </ul>
            <span className="navbar-text" data-tour="demo-button">
              <button className="btn btn-primary" onClick={startTour}>
                start tour
              </button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
