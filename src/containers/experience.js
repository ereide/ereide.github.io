import React from 'react';

import { WorkCarouselInstance } from './../components/carousel.js';
import DetailedBox from './../components/detailedbox.js';

import swiftnav_logo from './../assets/swiftnav.png';
import sommerskole_logo from './../assets/sommerskolen_2.jpg';
import nexans_logo from './../assets/nexans.png';

import './containers.css';

const swiftnav_workbox = (
  <DetailedBox
    leftImage={true}
    image={swiftnav_logo}
    heading={'Swift Navigation -'}
    mutedheading={'Software and Estimation Intern'}
    subheading={'San Francisco, CA, USA, June - August 2016'}
    firstParagraph={
      'During my time at Swift Navigation I was working in the Estimation team. I was set to reasearch algorithms to detect up to multiple satellite signal errors and then implement it in their Python prototyping environment. I successfully implemented a method to detect when signals were statistically unlikely by calculating the chi squared statistic from the residual terms and the residual covariance matrix and then testing it against a threshold calculated from the given accepted probability of false alert.'
    }
    secondParagraph={
      'I was also set to develop an algorithm to detect cycle slips in the carrier phase tracking. By using calculated doppler shift values from single differenced carrier phase measurements, I could use an iterative least squares to estimate the velocity and clock drift shift, and the residual. From that I could use some of the same outlier detection algorithms from before to decide which signals were likely to originate from cycle slips. The algorithm I developed was able to successfully correctly detect and exclude several cycle slips simultaneously with a very low probability of false alerts and wrong exclusions.'
    }
  />
);

const nexans_workbox = (
  <DetailedBox
    leftImage={false}
    image={nexans_logo}
    heading={'Nexans Norway - '}
    mutedheading={'Software intern'}
    subheading={'Oslo, Norway, June - September 2017 and June - September 2015'}
  >
    <p>
      At Nexans I have been assigned projects encompassing physical modelling
      and developing software to calculate or predict these phenomenons. These
      projects include creating a simple finite element program for determining
      heat conduction within cables to assist manufacturing. I did also work on
      a program to improve the measurements of resistance, capacitance and
      inductance using the Telegrapher’s equations. I was also assigned a
      project to try to investigate a recurring problem of some cables being
      uncoilable for storage. To assist the design and manufacturing of these
      cables I developed intuitive computer programs for calculating these
      effect. These programs are widely used today within the company.
    </p>
  </DetailedBox>
);

const sommerskolen_workbox = (
  <DetailedBox
    leftImage={true}
    image={sommerskole_logo}
    heading={'Sommerskolen i Oslo - '}
    mutedheading={'Teaching Assistant'}
    subheading={'Oslo, Norway, Summer 2013 & 2014'}
    firstParagraph={
      "For two consecutive summers I worked a few weeks as teaching assistant for the summer school in Oslo. I was given several different roles, including teaching maths and norwegian to primary school students. My time there taught me much about working with children and people which you don't usually get in more technical settings. "
    }
    secondParagraph={''}
  />
);

class Experience extends React.Component {
  render() {
    return (
      <div>
        <WorkCarouselInstance />
        <br />
        <hr />
        {nexans_workbox}
        <hr />
        {swiftnav_workbox}
        <hr />
        {sommerskolen_workbox}
      </div>
    );
  }
}

export default Experience;
