import React from 'react';

import './containers.css';

import DetailedBox from '../components/detailedbox.js';
import reactlogo from '../assets/reactlogo.png';

const reactbox = (
  <DetailedBox
    leftImage={false}
    image={reactlogo}
    heading={''}
    mutedheading={''}
    subheading={''}
  >
    <p>
      This project is built using React and Facebook’s
      <a href="https://github.com/facebookincubator/create-react-app">
        Create React App
      </a>
      which proved to be a wonderful platform for building fast, responsive and
      beautiful looking webapps. You can check out my{' '}
      <a href="https://github.com/ereide/home_page_react"> Github repo </a> for
      this project. To speed up loading time of the webpage I am using
      asynchronous loading. I am also using React-Bootstrap extensively making
      my page responsive on mobile devices as well. The routing is done using
      react-router-dom.
    </p>
  </DetailedBox>
);

class About extends React.Component {
  render() {
    return (
      <div>
        {reactbox}
      </div>
    );
  }
}

export default About;
