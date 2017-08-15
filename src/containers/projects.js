import React from 'react';

import DetailedBox from './../components/detailedbox.js';

import blackbox_proj from './../assets/hackmiteivind.jpg';
import m3nevada_proj from './../assets/nevada.jpg';
import m3avionics_proj from './../assets/m3avionics.jpg';
import woodchuck_proj from './../assets/woodchuck.jpg';

import './containers.css';

const blackbox_probox = (
  <DetailedBox
    leftImage={false}
    image={blackbox_proj}
    heading={'BlackBox AI '}
    mutedheading={''}
    subheading={'HACK MIT Sep, 2016'}
  >
    <p>
      My team won Facebook's Sponsor prize for the chatbot we designed during
      Hack MIT 2016. The chatbot used Microsoft Office's Natural Language
      Processing API to determine the intention of a message. From there we used
      the intentions to transition between states in a large state machine.
    </p>
    <p>
      I was in charge of designing and implementing the overall architecture of
      the State machine and integrating the output from the NLP into meaningful
      actions.{' '}
      <a href="https://github.com/96imranahmed/blackbox-public">
        Check out the github repository
      </a>
    </p>
  </DetailedBox>
);

const woodchuck_probox = (
  <DetailedBox
    leftImage={true}
    image={woodchuck_proj}
    heading={'Hight Altitude Baloon Tracker'}
    mutedheading={'- Team Leader'}
    subheading={'Cambridge University Spaceflight, August 2015 - June 2016'}
  >
    <p>
      During my second year in Cambridge University Spaceflight I was the team
      leader for the High Altitude Ballooning team. Our goal was to design a new
      tracker that was cheap and light that could reliably estimate its position
      and transmit that over radio. We also wanted to build something that could
      easily be extended to perform scientific experiments in flight.
    </p>
    <p>
      I was assigned to be team leader for the operation. The team consisted of
      5 people working with the electronics and software, 2 people building
      balloons and at launches we had help from other students in the society.
      <a href="https://github.com/cuspaceflight/Woodchuck">
        {' '}Check out the GitHub repository
      </a>
    </p>
  </DetailedBox>
);

const m3avionics_probox = (
  <DetailedBox
    leftImage={false}
    image={m3avionics_proj}
    heading={'Martlet 3'}
    mutedheading={' - Radio and GPS team leader'}
    subheading={'Cambridge University Spaceflight, August 2015 - June 2016'}
  >
    <p>
      As part of building an immense rocket that is aiming to break the European
      Altitude record for amateurs we designed an intricate stack of flight
      computers to do estimation, control and communication. The design was
      modular to increase the reliability if something went wrong, as well as
      customizable for different projects.
    </p>
    <p>
      I was in charge of designing the radio and gps module. This included both
      PCB and firmware design.
      <a href="https://github.com/cuspaceflight/m3-avionics">
        Check out the github repository
      </a>
    </p>
  </DetailedBox>
);

const m3nevada_probox = (
  <DetailedBox
    leftImage={true}
    image={m3nevada_proj}
    heading={'Cambridge University Spaceflight'}
    mutedheading={''}
    subheading={'August 2014 - September 2015'}
  >
    <p>
      I have also taken part in other projects in CUSF including{' '}
      <a href="https://github.com/cuspaceflight/m2-electronics">
        Martlet 2
      </a>{' '}
      which we launched in Nevada, USA in September 2015.{' '}
      <a href="https://www.flickr.com/photos/137278131@N05/">
        See pictures from the trip here
      </a>. I also participated in designing a smaller simpler general purpose
      flight computer called{' '}
      <a href="https://github.com/cuspaceflight/avionics14">Badger 3</a>.
    </p>
  </DetailedBox>
);

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1 class="page-heading"> Projects </h1>
        <hr />
        {blackbox_probox}
        <hr />
        {woodchuck_probox}
        <hr />
        {m3avionics_probox}
        <hr />
        {m3nevada_probox}
      </div>
    );
  }
}

export default Projects;
