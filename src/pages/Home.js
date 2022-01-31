import React from "react";
import Nav from "../components/Nav";
import "../App.css"

function Home() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="content-container" id="main-area">
        <p className="body-text">Hi, welcome to my website!</p>
      </div>
    </>
  );
}

export default Home;
