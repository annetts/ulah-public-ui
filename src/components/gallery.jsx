import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Handful of greatness</h2>
          <p>Let us take you through our magic.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <iframe
                title="A320 Saudia TVC"
                src="https://player.vimeo.com/video/330993133?h=ca46b2614b"
                width="400"
                height="225"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                <a href="https://vimeo.com/330993133">A320 Saudia TVC</a>{" "}
              </p>
              {/* <p>
                Client: Saudia
                <br />
                Director: Xavier Mairesse
                <br />
                Agency: Focus Advertising
                <br />
                Ciematographer: Gorka Gomez Andreu
                <br />
                Production: Film Pudding
                <br />
                Production Service: Cuba Films &amp; Estonian Production Service
              </p> */}
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <iframe
                title="BMW Unplug"
                src="https://player.vimeo.com/video/351185981?h=53f4fba3c3"
                width="400"
                height="225"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                <a href="https://vimeo.com/351185981">BMW Unplug &amp; Play</a>{" "}
              </p>
              {/* <p>
                dir: Micky Suelzer
                <br />
                dop: Philip Kaminiak
                <br />
                prod: BIGFISH Filmproduktion
                <br />
                prod. service: CUBA FILMS &amp; Estonian Production Service
                <br />
                edit: Alex Jurkat
                <br />
                VfL: FABLE FX
                <br />
                agency: Jung von Matt
                <br />
                client: BMW
                <br />
                casting: Estonian Casting <br />
              </p> */}
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <iframe
                title="IKEA Storage"
                src="https://player.vimeo.com/video/329964485?h=5caca24990"
                width="400"
                height="225"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                <a href="https://vimeo.com/329964485">Ikea Storage Family</a>{" "}
                from <a href="https://vimeo.com/user7437979">CUBA FILMS</a>
              </p>
              {/* <p>
                Client IKEA Finland
                <br />
                Director Sam Shingler
                <br />
                DOP Jean-No&euml;l Mustonen
                <br />
                Production Otto Production
                <br />
                Production Service Cuba Films &amp; Estonian Production Service
              </p> */}
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <iframe
                title="Volkswagen Caddy Cargo TVC"
                src="https://player.vimeo.com/video/487188327?h=7a81550e75"
                width="400"
                height="225"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                <a href="https://vimeo.com/487188327">
                  New Volkswagen Caddy Cargo TVC
                </a>{" "}
                from{" "}
                <a href="https://vimeo.com/estoniancasting">Estonian Casting</a>{" "}
              </p>
              {/* <p>
                Agency: Grabarz &amp; Partner
                <br />
                Production: 27km
                <br />
                Service Production: Cuba Films/ EPS
                <br />
                Director: Djawid Hakimyar
                <br />
                DOP: Antonio Paladino
              </p> */}
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4">
              <iframe
                src="https://player.vimeo.com/video/487181240?h=0593f68827&title=0&byline=0"
                width="400"
                height="225"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>
                <a href="https://vimeo.com/487181240">
                  Telia &quot;Greener future&quot; TVC
                </a>{" "}
              </p>
              {/* <p>
                Client: Telia
                <br />
                Creative Agency: Optimist Creative
                <br />
                Creative Director: Siim Nikopensius
                <br />
                Project Manager: Maris Teder
                <br />
                Production Company: Get Shot Films
                <br />
                Producer: Aili Maarja
                <br />
                Director: Helen Takkin
                <br />
                Casting: Meeli Seermaa &amp; Estonian Casting
              </p> */}
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <iframe
                width="400"
                height="225"
                src="https://www.youtube.com/embed/8O67Y0Jqg0s?si=ky99BU67U-QA40Yn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="portfolio-footer">
          <p>
            These are just some of our finished projects, we look forward to
            discussing further details, exploring potential collaborations, and
            tailoring solutions to meet your unique needs. Feel free to reach
            out, and let's start a conversation.
          </p>
        </div>
      </div>
    </div>
  );
};
