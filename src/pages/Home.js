import React from "react";
import Nav from "../components/Nav";
import "../App.css";
import { Button } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import AboutMeCard from "../components/AboutMeCard";
import SkillsCard from "../components/SkillsCard";


function Home() {
  return (
    <>
      <div className="grey-container">
        <Nav />
        <div className="title-container" id="main-area">
          <div style={{ width: "25%" }}>
            <AboutMeCard />
          </div>
          <div style={{ width: "75%" }}>
            <SkillsCard />
          </div>
        </div>
        <div className="content-container">
          <Paper
            sx={{
              alignItems: "center",
              bgcolor: "background.paper",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: 3,
              fontWeight: "bold",
              margin: "1rem",
            }}
          >
            <div className="content-container-center">
              <Typography variant="h4" color="text.primary" gutterBottom={true}>
                Projects
              </Typography>
            </div>
            <Divider
              sx={{
                width: "90%",
                display: "flex",
                margin: "auto",
              }}
            ></Divider>

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
                category="Hardware"
              />
              <ProjectCard
                complexity="Medium"
                name="Infinity Table"
                videoLink=""
                projectLink=""
                description="A table that has a one way mirror giving an LED strip controlled by a customer controller have an infity effect."
                category="Hardware"
              />
               <ProjectCard
                complexity="Medium"
                name="Resume Generator"
                videoLink=""
                projectLink=""
                description="A python project that uses the pdfkit library to generates a resume based on user input and the custom template selected by the user."
                category="Software"
              />
               <ProjectCard
                complexity="Medium"
                name="Textify Extension"
                videoLink=""
                projectLink=""
                description="A chrome extension that will convert text in a image into text that can be copied and pasted by the user."
                category="Software"
              />
             
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default Home;
