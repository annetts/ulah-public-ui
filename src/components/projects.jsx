import { Image } from "./image";
import React from "react";

export const Projects = (props) => {
  return (
    <div id="projects" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Handful of greatness</h2>
            <p>Let us take you through our magic.</p>
        </div>
        <div className="row">
            <div className="projects-items">
              {props.data ? props.data.map((d, i) => (
                  <div className="col-sm-6 col-md-4 col-lg-4"
                    key={`${d.title}-${i}`}
                  >
                  <Image
                    title={d.title}
                    smallImage={d.smallImage}
                    link={d.link}
                  />
                  </div>
                  ))
              : "Loading..."}
            </div>
        </div>
        <div className="projects-footer">
            <p>
              These are just some of our finished projects, we look forward to discussing further details, exploring potential collaborations, 
              and tailoring solutions to meet your unique needs. Feel free to reach out, and let's start a conversation.
            </p>
        </div>
      </div>
    </div>
  );
};