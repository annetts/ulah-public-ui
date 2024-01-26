import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>What we do</h2>
          <p>
            Unleash Star Quality: Elevate your project with our top-tier talent
            casting services, connecting you with the perfect actors and
            performers to bring your vision to life.
          </p>
        </div>
        <div className="flex p-8 justify-center">
          <div className="sm:flex sm:justify-center">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    aria-hidden="true"
                    className="col-md-4"
                  >
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
