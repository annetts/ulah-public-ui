import React from "react";

export const Tips = (props) => {
  return (
    <div id="tips">
      <div className="container">
      <div className="tips-text">
        <div className="section-title text-center">
            <h2>Casting tips</h2>
            <h3>Few tips and ticks for producing a smooth-operator-casting-material.</h3>
          </div>
        <div className="row">
      
          <div className="col-xs-12 col-md-6">
            <h3>Photos</h3>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                <li>Add 4 photos of yourself:</li>
                <ol style={{ paddingLeft: '20px' }}>
                  <li>Portrait (in a size of a passport photo, but with a smile)</li>
                  <li>Photo from your right side</li>
                  <li>Photo from your left side</li>
                  <li>Full body shot</li>
                </ol>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                <li>Be sure, that the photos are fresh (not older than 1 month)</li>
                <li>Taking photos with your phone is totally fine</li>
                <li>Don’t wear anything on your head (no sunglasses, no hats, no big scarfs)</li>
                <li>NO FILTERS!!!</li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <h3>Videos</h3>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul>
                <li>Film video in landscape format (turn your phone on it's side)</li>
                <li>In introduction clip, talk shortly about yourself - name, age, what you do in life, what are your hobbies. Intro clip should not be longer than 1 minute.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
