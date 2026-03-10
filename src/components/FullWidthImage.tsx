'use client';

import { Row, Image } from 'react-bootstrap';

const FullWidthImage = () => (
  <Row className="justify-content-center">
    <Image
      src="experience-islandsnow-bootstrap-main.png"
      alt="Island Snow Main Picture"
      className="pt-2 px-0"
      fluid
    />
  </Row>
);

export default FullWidthImage;