import React from "react";

export const Image = ({ title, smallImage, link }) => {
  return (
    <div className="projects-item">
      <div className="hover-bg">
        {" "}
        <a href={link} title={title} data-lightbox-gallery="projects">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
