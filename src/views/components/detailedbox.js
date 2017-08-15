import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';

/*
const box = (
    <DetailedBox    leftImage={false} 
                    image={katta_uni}
                    heading = {""}
                    mutedheading = {""}
                    subheading = {""}
                    firstParagraph = {""}
                    secondParagraph = {""}
                     />
)
*/

class DetailedBox extends React.Component {
  render() {
    let textCol = (
      <Col md={7}>
        <h2 class="featurette-heading">
          {this.props.heading}{' '}
          <span class="text-muted"> {this.props.mutedheading}</span>
        </h2>
        <h4 class="featurette-heading text-muted">
          {this.props.subheading}
        </h4>
        <p class="lead">
          {this.props.firstParagraph}
        </p>
        <p class="lead">
          {this.props.secondParagraph}
        </p>
        {this.props.children}
      </Col>
    );

    let imgCol = (
      <Col md={5}>
        <Image src={this.props.image} responsive />
      </Col>
    );

    return (
      <Row>
        {this.props.leftImage ? textCol : imgCol}
        {this.props.leftImage ? imgCol : textCol}
      </Row>
    );
  }
}

export default DetailedBox;
