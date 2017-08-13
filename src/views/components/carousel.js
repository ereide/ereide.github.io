import React from 'react';

import {
  Carousel, 
} from 'react-bootstrap';



import cam_uni          from "./../../assets/cambridge_university.jpg"
import mit_uni          from "./../../assets/MIT-campus.jpg"
import katta_uni        from "./../../assets/oslo_katedralskole-1.jpg"

import halden_work      from "./../../assets/nexans-halden.jpg"
import sanfran_work     from './../../assets/golden-gate-bridge.jpg'

class BioCarouselInstance extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                <img width={1140} height={500} alt="1140x500" src={cam_uni} />
                <Carousel.Caption>
                    <h1 >University of Cambridge, King's College, MEng 2014-2018</h1>
                    <p > Information Engineering</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img width={1140} height={500} alt="1140x500"src={mit_uni} />
                <Carousel.Caption>
                    <h1 >MIT, Exchange year 2016-2017</h1>
                    <p > Computer Science and Control</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img width={1140} height={500} alt="1140x500"src={katta_uni}/>
                <Carousel.Caption>
                    <h1 >Oslo Katedralskole 2014-2018</h1>
                    <p > Natural Sciences and Maths</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

class WorkCarouselInstance extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={1140} height={500} alt="1140x500" src={halden_work} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1140} height={500} alt="1140x500"src={sanfran_work} />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export {BioCarouselInstance, WorkCarouselInstance};