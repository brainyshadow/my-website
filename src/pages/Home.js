import React from "react";
import Nav from "../components/Nav";
import "../App.css";
import { Button } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <>
      <div className="blue-container">
        <Nav />
        <div className="title-container" id="main-area">
          <p className="body-text">Hi, welcome to my website!</p>
          <p className="body-text">
            Here, I post some of my cool projects as well as practice my web
            developemnt and react skills.
          </p>
        </div>
        <div className="content-container-center">
        <p className="body-text">
           Projects
          </p>
        </div>
        <div className="content-container-center">
          <hr></hr>
        </div>

        <div className="content-container"></div>
        <div className="project-container" id="main-area">
          <ProjectCard
            complexity="Medium"
            name="DDB V8"
            videoLink="https://youtu.be/SYQoG84IRUQ"
            projectLink="https://github.com/seb997a/DDB"
            description="A developemnt platform that allows easy programming over USB using a open-source bootloader."
          />
          <ProjectCard
            complexity="Medium"
            name="LED Controller"
            videoLink="https://www.youtube.com/watch?v=PgKoRlew9HA&ab_channel=SebA"
            projectLink=""
            description="A LED controller that controlls an addresable LED strip that can change colors based on surrounding music."
          />
          <ProjectCard
            complexity="Medium"
            name="Fooseball Scoreboard"
            videoLink="https://www.youtube.com/watch?v=ESi4YN3UO08&ab_channel=SebA"
            projectLink=""
            description="A fooseball scoreboard that automatically senses goals and keeps track of the game's score."
          />
        </div>
      </div>
    </>
  );
}

export default Home;
