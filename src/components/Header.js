import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <video className="header-video" autoPlay loop muted>
          <source src="/커피2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay-text">
  A moment of relaxation in daily life,<br />
  with one cup of coffee.
</div>



        <Container fluid className="content-container">
          <Row className="align-items-center justify-content-between">
            <Col xs={12} md={4} className="left-content">어플 이름 / 로고</Col>
            <Col xs={12} md={4} className="center-content">중앙 내용</Col>
            <Col xs={12} md={4} className="right-content">우측 상단 내용</Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;