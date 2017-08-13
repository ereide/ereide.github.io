

import React from 'react';


import cam_uni          from "./../assets/cambridge_university.jpg"
import mit_uni          from "./../assets/MIT-campus.jpg"
import katta_uni        from "./../assets/oslo_katedralskole-1.jpg"

import {BioCarouselInstance} from "./components/carousel.js"
import DetailedBox from "./components/detailedbox.js"

const cam_schoolbox = (
    <DetailedBox    leftImage={false} 
                    image={cam_uni}
                    heading = {"Cambridge University, King's College"}
                    mutedheading = {"2014 - 2018"}
                    subheading = {"MEng, Information Engineering"}
                    >
        <p class="lead">

            At Cambridge I am studying Information engineering and instrumentation and control. During my two first years I studied general
            engineering disciplines, including Control Theory and Information, Mechanical Engineering, Electrical
            Engineering, Structural Engineering, Material Science, Thermodynamics and Fluid dynamics and Mathematics,
            as well as extensive coursework.</p>
        <p class="lead">
            Both my first two years in Cambridge I was awarded class I for my performance, and ended up in the top 5th and 6th percentile
            respectively the two years.
        </p>
    </DetailedBox>
);

const mit_schoolbox= (
    <DetailedBox    leftImage={true} 
                    image={mit_uni}
                    heading = {"MIT"}
                    mutedheading = {"2016 - 2017"}
                    subheading = {"Computer Science"}
                    >
            <p class="lead"> 
                I am doing my third year in MIT after being selected to take part in the Cambridge - MIT Exchange on a BP scholarship. While
                I am at MIT I will be taking various courses on <b class="notice">Algorithms, Feedback Control, Software construction,
                Inference, Entrepreneurship, Signals &amp; Systems</b> and more.
            </p>
            <p class="lead">
                The opportunity to go to MIT has broadened my technical abilities as well as given me an insight into a different student
                culture. 
            </p>
    </DetailedBox>

);

const katta_schoolbox = (
    <DetailedBox    leftImage={false} 
                    image={katta_uni}
                    heading = {"Oslo Katedralskole"}
                    mutedheading = {"2011 - 2014"}
                    subheading = {"General Studies with Natural Sciences"}
                    >
        <p class="lead">
            I did my High School Education at Oslo Katedralskole. Oslo Katedralskole is Norway's oldest and most prestigious high school,
            and has an outstanding list of notable alumni. During my time there I specialized in <b class="notice"> Physics, Maths for Natural Sciences, Economics </b> and <b class="notice"> Chemistry</b>
        </p>
        <p class="lead">
            I achieved an average of 5.9 out of 6, one of the highest in my year. My time a Oslo Katedralskole was both very educational,
            as well as giving lifelong friends.
        </p>
    </DetailedBox>
)

class Bio extends React.Component {
    render() {
        return (
            <div>
                <BioCarouselInstance />
                <br />
                <hr />
                {cam_schoolbox}
                <hr />
                {mit_schoolbox}
                <hr />
                {katta_schoolbox}
            </div>
        );
    }
}

export default Bio;