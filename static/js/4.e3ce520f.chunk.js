webpackJsonp([4],{492:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),c=a.n(o),s=a(496),l=a(513),u=a.n(l),h=a(514),p=a.n(h),m=a(515),d=a.n(m),f=a(516),g=a.n(f),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=c.a.createElement(s.a,{leftImage:!1,image:u.a,heading:"BlackBox AI ",mutedheading:"",subheading:"HACK MIT Sep, 2016"},c.a.createElement("p",null,"My team won Facebook's Sponsor prize for the chatbot we designed during Hack MIT 2016. The chatbot used Microsoft Office's Natural Language Processing API to determine the intention of a message. From there we used the intentions to transition between states in a large state machine."),c.a.createElement("p",null,"I was in charge of designing and implementing the overall architecture of the State machine and integrating the output from the NLP into meaningful actions."," ",c.a.createElement("a",{href:"https://github.com/96imranahmed/blackbox-public"},"Check out the github repository"))),w=c.a.createElement(s.a,{leftImage:!0,image:g.a,heading:"Hight Altitude Baloon Tracker",mutedheading:"- Team Leader",subheading:"Cambridge University Spaceflight, August 2015 - June 2016"},c.a.createElement("p",null,"During my second year in Cambridge University Spaceflight I was the team leader for the High Altitude Ballooning team. Our goal was to design a new tracker that was cheap and light that could reliably estimate its position and transmit that over radio. We also wanted to build something that could easily be extended to perform scientific experiments in flight."),c.a.createElement("p",null,"I was assigned to be team leader for the operation. The team consisted of 5 people working with the electronics and software, 2 people building balloons and at launches we had help from other students in the society.",c.a.createElement("a",{href:"https://github.com/cuspaceflight/Woodchuck"}," ","Check out the GitHub repository"))),E=c.a.createElement(s.a,{leftImage:!1,image:d.a,heading:"Martlet 3",mutedheading:" - Radio and GPS team leader",subheading:"Cambridge University Spaceflight, August 2015 - June 2016"},c.a.createElement("p",null,"As part of building an immense rocket that is aiming to break the European Altitude record for amateurs we designed an intricate stack of flight computers to do estimation, control and communication. The design was modular to increase the reliability if something went wrong, as well as customizable for different projects."),c.a.createElement("p",null,"I was in charge of designing the radio and gps module. This included both PCB and firmware design.",c.a.createElement("a",{href:"https://github.com/cuspaceflight/m3-avionics"},"Check out the github repository"))),v=c.a.createElement(s.a,{leftImage:!0,image:p.a,heading:"Cambridge University Spaceflight",mutedheading:"",subheading:"August 2014 - September 2015"},c.a.createElement("p",null,"I have also taken part in other projects in CUSF including"," ",c.a.createElement("a",{href:"https://github.com/cuspaceflight/m2-electronics"},"Martlet 2")," ","which we launched in Nevada, USA in September 2015."," ",c.a.createElement("a",{href:"https://www.flickr.com/photos/137278131@N05/"},"See pictures from the trip here"),". I also participated in designing a smaller simpler general purpose flight computer called"," ",c.a.createElement("a",{href:"https://github.com/cuspaceflight/avionics14"},"Badger 3"),".")),A=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),b(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{class:"page-heading"}," Projects "),c.a.createElement("hr",null),y,c.a.createElement("hr",null),w,c.a.createElement("hr",null),E,c.a.createElement("hr",null),v)}}]),t}(c.a.Component);t.default=A},496:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(0),c=a.n(o),s=a(211),l=a(497),u=(a.n(l),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),h=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=c.a.createElement(s.b,{md:7},c.a.createElement("h2",{className:"featurette-heading"},this.props.heading," ",c.a.createElement("span",{class:"text-muted"}," ",this.props.mutedheading)),c.a.createElement("h4",{className:"featurette-heading text-muted"},this.props.subheading),c.a.createElement("p",null,this.props.firstParagraph),c.a.createElement("p",null,this.props.secondParagraph),this.props.children),t=c.a.createElement(s.b,{md:5},c.a.createElement(s.d,{src:this.props.image,className:"detail-image",responsive:!0}));return c.a.createElement("div",{className:"detailed-box"},c.a.createElement(s.h,null,this.props.leftImage?e:t,this.props.leftImage?t:e))}}]),t}(c.a.Component);t.a=h},497:function(e,t,a){var n=a(498);"string"===typeof n&&(n=[[e.i,n,""]]);var i={};i.transform=void 0;a(488)(n,i);n.locals&&(e.exports=n.locals)},498:function(e,t,a){t=e.exports=a(487)(!0),t.push([e.i,".detailed-box p{font-size:1.3em;text-align:left}.detail-image{width:100%}","",{version:3,sources:["/home/eivind/Documents/Learning/JavaScript/react/home_page_react/src/components/detailedbox.css"],names:[],mappings:"AAAA,gBACE,gBAAiB,AACjB,eAAiB,CAClB,AAED,cACE,UAAY,CACb",file:"detailedbox.css",sourcesContent:[".detailed-box p {\n  font-size: 1.3em;\n  text-align: left;\n}\n\n.detail-image {\n  width: 100%;\n}\n"],sourceRoot:""}])},513:function(e,t,a){e.exports=a.p+"static/media/hackmiteivind.8c3a4a11.jpg"},514:function(e,t,a){e.exports=a.p+"static/media/nevada.70576d05.jpg"},515:function(e,t,a){e.exports=a.p+"static/media/m3avionics.4afcf1db.jpg"},516:function(e,t,a){e.exports=a.p+"static/media/woodchuck.de42f1ae.jpg"}});
//# sourceMappingURL=4.e3ce520f.chunk.js.map