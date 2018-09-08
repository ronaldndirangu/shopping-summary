import React, { Component, } from 'react';
import { Button, Collapse, Well, Media, Row, Col, } from 'react-bootstrap';
import './itemdetails.css';

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <Button 
          className="item-details-button" 
          bsStyle="link" 
          onClick={() => this.setState({open: !this.state.open})}>
          { this.state.open === false ? `See `: `Hide `} item details
          { this.state.open === false ? ` +`: ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
             <Well>
              <Media>
                <Media.Left>
                  <img 
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="https://i5.walmartimages.com/asr/58ed28c8-42fa-4966-902c-292940257bb1_1.ef2b733f30c41bfa79d99303e6a11627.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                />
                </Media.Left>
                <Media.Body>
                  <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Blue</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${this.props.initialPrice}`}</strong>
                    </Col>
                    <Col md={6}>
                      Qty: 1 
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
             </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default ItemDetails;