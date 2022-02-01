import React from "react";
import Nav from "../components/Nav";
import "../App.css"
import { Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="content-container" id="main-area">
        <p className="body-text">Hi, welcome to my website!</p>
      </div>
      <Button href="resume" variant="primary" size="sm">
      Small button
    </Button>{' '}
    </>
  );
}

export default Home;
