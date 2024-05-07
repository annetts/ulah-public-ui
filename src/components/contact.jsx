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
                    <i className="fa fa-user"></i> Name
                  </span>{" "}{props.data ? props.data.name : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>{" "}{props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}{props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}{props.data ? props.data.email : "loading"}
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
          <p>Ulah film</p>
        </div>
      </div>
    </div>
  );
};
