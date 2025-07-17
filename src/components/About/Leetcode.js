import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Leetcode() {
  const username = 'Akiraa15';

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <h1 className="project-heading" style={{ paddingBottom: '20px' }}>
        My <strong className="purple">LeetCode</strong> Journey
      </h1>

      {/* LeetCode Activity Heatmap */}
      <Col xs={12} md={8} style={{ textAlign: 'center', paddingBottom: '20px' }}>
        <h2 className="purple" style={{ paddingBottom: '10px' }}>🔥 Active Days</h2>
        <img
          src={`https://leetcard.jacoblin.cool/${username}?theme=dark&ext=heatmap`}
          alt="LeetCode Activity Heatmap"
          style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}
        />
      </Col>
    </Row>
  );
}

export default Leetcode;
