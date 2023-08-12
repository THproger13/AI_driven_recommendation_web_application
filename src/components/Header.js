import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import './Header.css'; // 스타일 파일을 불러옴

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <video className="header-video" autoPlay loop muted>
          <source src="/커피2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Navbar bg="light" expand="lg">
          <Container>
            <Row className="align-items-center">
              <Col className="text-left">좌측 상단 내용</Col>
              <Col className="text-center">중앙 내용</Col>
              <Col className="text-right">우측 상단 내용</Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
