import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';

import DetailedBox from './../components/detailedbox.js';

//importing images
import c_cpp from './../assets/c_cpp.jpg';
import csharp from './../assets/csharp.jpg';
import git from './../assets/git.png';
import html_css from './../assets/html_css.png';
import latex from './../assets/latex.png';
import leadership from './../assets/leadership.jpg';
import matlab from './../assets/matlab.png';
import nodejs from './../assets/nodejs.png';
import python from './../assets/python.jpg';
import unix from './../assets/unix.png';
import feedback from './../assets/feedback.png';
import entrepreneur from './../assets/entrepreneur.jpg';

//Importing css
import './containers.css';

//Functions
function imgText(image, heading, text) {
  return (
    <div>
      <Image src={image} height={140} />
      <h2>
        {heading}
      </h2>
      <p>
        {text}
      </p>
    </div>
  );
}

function three_col(left, mid, right) {
  return (
    <Row>
      <Col md={4}>
        {left}
      </Col>

      <Col md={4}>
        {mid}
      </Col>

      <Col md={4}>
        {right}
      </Col>
    </Row>
  );
}

//Content
const python_skillbox = (
  <DetailedBox
    leftImage={false}
    image={python}
    heading={'Python'}
    mutedheading={'- Professional'}
    subheading={''}
  >
    <p>
      I have a strong foundation with Python through my various internships and
      classes at MIT and Cambridge. Python is my preferred language for personal
      use and prototyping. During my internship at Swift Navigation I learned to
      write fast, reliable and scalable Python
    </p>
    <h3 class="featurette-heading">Packages:</h3>
    <p>
      I have used numpy and scipy extensively for writing fast code computations
      in Python. I have also experience with building web servers with Flask,
      Bootstrap, SQL databases.
    </p>
  </DetailedBox>
);

const c_cpp_skillbox = (
  <DetailedBox
    leftImage={true}
    image={c_cpp}
    heading={'C/C++'}
    mutedheading={'- Experienced'}
    subheading={''}
  >
    <p>
      I have written several programs in C and C++ through my involvement in
      student societies. In particular I have written firmware for various
      flight computers during my time in Cambridge University Spaceflight. I
      have also learned C++ through programming exercises at Cambridge
      University
    </p>
  </DetailedBox>
);

const csharp_skillbox = (
  <DetailedBox
    leftImage={false}
    image={csharp}
    heading={'C#'}
    mutedheading={'- Experienced'}
    subheading={''}
  >
    <p>
      {' '}During my time at Nexans I wrote several programs for calculating
      various physical properties in underwater cables in C#. I also got
      introduced to writing GUIs with the .NET framework for C#.
    </p>
  </DetailedBox>
);

const html_css_skillbox = imgText(
  html_css,
  'HTML/CSS',
  'Through various web development projects I have had some exposure to writing CSS and HTML pages'
);

const node_js_skillbox = imgText(
  nodejs,
  'Node.js',
  'I have had some experience writing server and client side scripts using Node and Javascript. In this context I have made Databases using the noSQL database framework MongoDB'
);

const matlab_skillbox = imgText(
  matlab,
  'MATLAB and Simulink',
  'I have used MATLAB extensively for creating scripts to do calculations involving matrix operations as well as prototyping machine learning algorithms. I have also some experience with image processing using MATLAB. I have also designed feedback control systems with Simulink.'
);

const prog_lang_area = three_col(
  html_css_skillbox,
  node_js_skillbox,
  matlab_skillbox
);

const leadership_skillbox = (
  <DetailedBox
    leftImage={false}
    image={leadership}
    heading={'Leadership and Teamwork'}
    mutedheading={'- Experienced'}
    subheading={''}
  >
    <p>
      I have throughout my education and extra curriculars had experience with
      working in teams, and often leading teams. This includes both technical
      and non technical roles. I communicate well with others and I am also used
      to speaking in public.
    </p>
  </DetailedBox>
);

const control_skillbox = (
  <DetailedBox
    leftImage={true}
    image={feedback}
    heading={'Feedback Control Systems and Estimation '}
  >
    <p>
      One of my main areas of focus at University has been feedback control
      systems and estimation. I have written control loops for a drone as well
      as having had exposure to estimation techniques during my time at Swift
      Navigation. I have also worked on several kalman filters and similar
      through my involvement in Cambridge University Spaceflight
    </p>
  </DetailedBox>
);

const entrepeneur_skillbox = (
  <DetailedBox
    leftImage={false}
    image={entrepreneur}
    heading={'Entrepreneurship'}
  >
    <p>
      During my time at MIT I had the opportunity to take an advanced
      entrepreneurship project class exposing me to the inner workings on how to
      start a business. This, combined with my time in San Francisco, has helped
      me develop an entrepreneurial mindset.
    </p>
  </DetailedBox>
);

const git_skillbox = imgText(
  git,
  'Git',
  'Both through my internships and my participation in various student societies I have used Git extensively for version control.'
);
const unix_skillbox = imgText(
  unix,
  'UNIX and Linux development',
  'I am used to working with Linux for development purposes'
);
const latex_skillbox = imgText(
  latex,
  'LaTeX',
  'I have used LaTeX extensively to write reports at school and at work.'
);

const other_skills_area = three_col(
  git_skillbox,
  unix_skillbox,
  latex_skillbox
);

class Skills extends React.Component {
  render() {
    return (
      <div>
        <h1> Programming languages </h1>
        <hr />
        {python_skillbox}
        <hr />
        {c_cpp_skillbox}
        <hr />
        {csharp_skillbox}
        <hr />
        {prog_lang_area}

        <h1> Other skills </h1>
        <hr />
        {leadership_skillbox}
        <hr />
        {control_skillbox}
        <hr />
        {entrepeneur_skillbox}
        <hr />
        {other_skills_area}
      </div>
    );
  }
}

export default Skills;
