'use client';

import { Row, Col, Image } from 'react-bootstrap';

const IslandSnowLogo = () => (
  <Row>
    <Col>
      <Image
        src="experience-islandsnow-bootstrap-logo.png"
        alt="Island Snow Hawaii Logo"
        fluid
        className="rounded mx-auto d-block py-1"
      />
    </Col>
  </Row>
);

export default IslandSnowLogo;