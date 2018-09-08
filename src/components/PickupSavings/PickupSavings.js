import React,  { Component, } from 'react';
import { Row, Col, Tooltip, OverlayTrigger, } from 'react-bootstrap';

const styles = {
  pickupSavings: {
    textDecoration: 'underline',
  },
  totalSavings: {
    color: 'red',
    fontWeight: 800,
  }

}

class PickupSavings extends Component {
  render() {
    const toolbar = (
      <Tooltip id="tooltip">
        <p>Picking up your order in the store helps cut cost, and we pass your savings on to you.</p>
      </Tooltip>
    )
   
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={toolbar}>
            <div style={styles.pickupSavings}>
              Pickup Savings
            </div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    )
  }
}

export default PickupSavings;
