import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

function Leetcode() {
  const [, setRating] = useState(null);
  // const [rating, setRating] = useState(null);
  const username = 'sumitchaturvedi15';

  useEffect(() => {
    const fetchRating = async () => {
      const query = `
        query getUserContestRanking($username: String!) {
          userContestRanking(username: $username) {
            rating
          }
        }
      `;
      const variables = { username };
      const response = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      });
      const data = await response.json();
      setRating(data.data.userContestRanking?.rating || 'N/A');
    };

    fetchRating();
  }, [username]);

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

      {/* LeetCode Contest Rating
      <Col xs={12} md={8} style={{ textAlign: 'center' }}>
        <h2 className="purple" style={{ paddingBottom: '10px' }}>⭐ Current Rating</h2>
        <p style={{ fontSize: '24px', color: '#E63946' }}>
          {rating !== null ? rating : 'Loading...'}
        </p>
      </Col> */}
    </Row>
  );
}

export default Leetcode;
