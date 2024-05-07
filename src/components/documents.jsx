import React from "react";

export const Documents = (props) => {
  return (
    <div id="documents" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Documents</h2>
        </div>
        <div>
          <ul className="list-unstyled list pl-5">
            {props.data
              ? props.data.map((d, index) => (
                  <li key={index} className="mb-3 d-flex align-items-center">
                    <a rel="noopener noreferrer" target="_blank" href={d.link}>
                      <i className={d.icon}></i>
                      {d.title}
                    </a>
                  </li>
                ))
              : "Loading..."}
          </ul>
        </div>
      </div>
    </div>
  );
};
