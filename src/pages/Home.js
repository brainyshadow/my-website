import React from "react";
import Nav from "../components/Nav";
import "../App.css";
import { Button } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="content-container" id="main-area">
        <p className="body-text">Hi, welcome to my website!</p>
      </div>
      <div className="project-container" id="main-area">
        <ProjectCard
          complexity="Medium"
          name="DDB V8"
          videoLink="https://mui.com/styles/basics/"
          projectLink="https://github.com/seb997a/DDB"
        />

        <ProjectCard
          complexity="Medium"
          name="DDB V8"
          videoLink="https://mui.com/styles/basics/"
          projectLink="https://github.com/seb997a/DDB"
        />
        <ProjectCard
          complexity="Medium"
          name="DDB V8"
          videoLink="https://mui.com/styles/basics/"
          projectLink="https://github.com/seb997a/DDB"
        />
        <ProjectCard
          complexity="Medium"
          name="DDB V8"
          videoLink="https://mui.com/styles/basics/"
          projectLink="https://github.com/seb997a/DDB"
        />
        <ProjectCard
          complexity="Medium"
          name="DDB V8"
          videoLink="https://mui.com/styles/basics/"
          projectLink="https://github.com/seb997a/DDB"
        />
      </div>
      <Button href="resume" variant="primary" size="sm">
        Resume
      </Button>{" "}
    </>
  );
}

export default Home;
