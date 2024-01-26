import React, { useState } from "react";
import { TalentForm } from "./talentForm";

export const Header = (props) => {
  const [seen, setSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={togglePop}
                >
                  Become a talent
                </a>{" "}
                {/* eslint-enable jsx-a11y/anchor-is-valid */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-100">
        {seen ? <TalentForm toggle={togglePop} /> : null}
      </div>
    </header>
  );
};
