'use client';

import { Row, Col } from 'react-bootstrap';

const MiddleMenu = () => (
  <Row className="justify-content-center pt-4">
    <Col xs="auto"><strong>MEN</strong></Col>
    <Col xs="auto"><strong>WOMEN</strong></Col>
    <Col xs="auto"><strong>KIDS</strong></Col>
    <Col xs="auto"><strong>BRANDS</strong></Col>
    <Col xs="auto"><strong>SEARCH</strong></Col>
  </Row>
);

export default MiddleMenu;