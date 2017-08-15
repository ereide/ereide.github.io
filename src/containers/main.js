import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import cam_uni from './../assets/cambridge_university.jpg';
import eivind_portrett from './../assets/eivindeide.jpg';
import swiftnav_short from './../assets/swiftnav.png';
import cusf_logo from './../assets/cusflogo.jpg';

import { BioCarouselInstance } from './../components/carousel.js';

import './main.css';

const personalBox = (
  <div className="personal-box">
    <Row>
      <Col md={4}>
        <Image src={eivind_portrett} rounded responsive />
      </Col>
      <Col md={8}>
        <h1>Eivind Roson Eide</h1>
        <p>
          I am a skilled software engineer studying at MIT and University of
          Cambridge. I am 21 years old and I am of half Norwegian and half
          Spanish decent. The last couple of years I have had several relevant
          and interesting internships and contributed to projects that have
          given me an insight into a broad range of different areas. I also
          enjoy playing soccer and I am a film enthusiast.
        </p>
        <p>
          I am hard working, passionate and trustworthy. I have received
          appreciation for my work from everyone I have worked with in a
          professional setting.
        </p>

        <p>
          Please check out the rest of my page to learn more about me and things
          I have been up to.
        </p>
      </Col>
    </Row>
  </div>
);

function linkImg(image, heading, text, link) {
  return (
    <Link to={link}>
      <Image src={image} height={160} rounded />
      <h2>
        {heading}
      </h2>
      <p>
        {text}
      </p>
    </Link>
  );
}

const bioBox = linkImg(
  cam_uni,
  'Education',
  'Learn more about my education at various top universities and schools around the world',
  '/bio'
);

const projectBox = linkImg(
  cusf_logo,
  'Projects',
  'Learn more about the projects I have worked on, which have given me valuable engineering and management skills.',
  '/projects'
);

const experienceBox = linkImg(
  swiftnav_short,
  'Experience',
  'Learn more about places I have done internships and what valuable experiences I have taken from them.',
  '/experience'
);

const referenceArea = (
  <Row>
    <Col md={4}>
      {bioBox}
    </Col>

    <Col md={4}>
      {projectBox}
    </Col>

    <Col md={4}>
      {experienceBox}
    </Col>
  </Row>
);

class Main extends React.Component {
  render() {
    return (
      <div>
        <BioCarouselInstance />
        <br />
        {personalBox}
        <hr />
        {referenceArea}
      </div>
    );
  }
}

export default Main;
