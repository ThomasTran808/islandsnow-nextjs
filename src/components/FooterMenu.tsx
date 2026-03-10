'use client';

import { Container, Row, Col } from 'react-bootstrap';

const FooterMenu = () => (
  <footer className="footer-background py-3">
    <Container>
      <Row>
        <Col>
          <div>NAVIGATION</div>
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          <div>MAIN MENU</div>
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          <div>CONNECT</div>
          <hr />
          <div>Sign up for the latest updates</div>
          <div className="py-2">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn btn-dark ms-2">Join</button>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;