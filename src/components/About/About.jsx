import React from "react";
import "./About.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <div className="About">  
        <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>      
        <div className="hero-overlay">
          
          <h1>About for Bacola</h1>
          <p>We can do more for you</p>
        </div>
      </div>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <p className="text-muted prag-1">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus
              id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum
              metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
              interdum turpis. Curabitur porta auctor quam, pretium facilisis
              nisl. Pellentesque efficitur elit ante, vel vulputate tortor
              blandit nec.
            </p>
          </Col>
        </Row>

        
        <Row className="mb-4">
          <Col>
            <h5 className="fw-bold Subtitle">
              Quisque erat urna, congue et libero in eleifend euismod velit.
            </h5>
            <p className="text-muted prag-sub">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus
              id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum
              metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
              interdum turpis. Curabitur porta auctor quam, pretium facilisis
              nisl. Pellentesque efficitur elit ante, vel vulputate tortor
              blandit nec.
            </p>
          </Col>
        </Row>
        <Row className="about-part2 align-items-center position-relative">
          <Col md={5} className="mb-4 mb-md-0">
            <Image src="src\assets\images\CEO.png" alt="CEO" fluid />
          </Col>
          <Col md={7}>
            <p className="text-muted small mb-1 ceo-name">Rachel Leonard - Bacola CEO</p>
            <h5 className="fw-bold">
              Duis convallis luctus pretium.Pellentesque habitant morbi
            </h5>
            <p className="text-muted ceoPrag1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <p className="text-muted ceoPrag2">
              In fermentum mi ut sapien semper, a sagittis lorem vulputate.
              Integer gravida, dui eget aliquet tempus, turpis orci vehicula
              ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
              lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis.
              Integer tortor nulla, ultricies et nisi sit amet, interdum dictum
              felis. In semper laoreet dui vitae pharetra. Etiam sit amet
              molestie nulla, eu efficitur orci. Praesent rutrum ante justo,
              eget malesuada ante ornare ac. Ut dignissim blandit urna, eget
              euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Quisque lobortis
              libero ante. Nullam in feugiat erat. Aenean sed justo dapibus,
              sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl
              condimentum fermentum at et sem. Curabitur fermentum dolor eu
              lacus consectetur varius.
            </p>
          </Col>
          <Row >
            <Col className="abslutePart">
              <p className="text-muted  ">
                In nec purus eget neque accumsan finibus. Duis condimentum elit
                ut libero commodo iaculis. Donec augue diam, tristique et
                ultricies nec, consectetur quis enim. Nullam id rutrum ex.
                Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus
                lacinia vestibulum metus in dapibus. Vestibulum sit amet
                sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor
                quam, pretium facilisis nisl. Pellentesque efficitur elit ante,
                vel vulputate tortor blandit nec.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className="mt-5">
          <Col>
            <p className="text-muted ceoPrag3 mt-5">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus
              id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum
              metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
              interdum turpis. Curabitur porta auctor quam, pretium facilisis
              nisl. Pellentesque efficitur elit ante, vel vulputate tortor
              blandit nec.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
