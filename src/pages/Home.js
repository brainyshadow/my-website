import React from "react";
import Nav from "../components/Nav";
import "../App.css";
import { Button } from "react-bootstrap";
import MyCard from "../components/MyCard"; 

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
        Resume
      </Button>{" "}
      <div style={{width: "30rem", padding: "5rem"}}>
      <MyCard/>

      </div>
    </>
  );
}

export default Home;
