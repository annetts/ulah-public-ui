import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">

          <div className="col-xs-12 col-md-6">

            <div className="contact-textbox">
              <h3>Contact Info</h3>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-user"></i> {props.data ? props.data.name : "loading"}
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> {props.data ? props.data.address : "loading"}
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> {props.data ? props.data.phone : "loading"}
                  </span>{" "}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> {props.data ? props.data.email : "loading"}
                  </span>{" "}
                </p>
              </div>
            </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <div className="contact-imgbox">
                <img
                  src="img/contact.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>Ulah Film</p>
        </div>
      </div>
    </div>
  );
};
