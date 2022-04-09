import React from "react";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import AboutMeCard from "../components/AboutMeCard";
import SkillsCard from "../components/SkillsCard";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="grey-container">
        <Nav />
        <div className="title-container" id="main-area">
          <div style={{ width: "30%" }}>
            <AboutMeCard />
          </div>
          <div style={{ width: "70%" }}>
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
              <Typography
                variant="h4"
                color="text.primary"
                gutterBottom={true}
                sx={{ margin: "1rem" }}
              >
                Favorite Projects
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
                complexity="Easy"
                name="Progress Bar Package"
                videoLink=""
                projectLink=""
                description="A simple, NPM module that adds a progress bar with customizable, color, width, and height to a project."
                category="Software"
              />
              <ProjectCard
                complexity="Complex"
                name="Resume Generator"
                videoLink=""
                projectLink=""
                description="A python project that uses the pdfkit library to generates a resume based on user input and a custom template."
                category="Software"
              />
              <ProjectCard
                complexity="Complex"
                name="Textify Extension"
                videoLink=""
                projectLink=""
                description="A chrome extension that will convert text in a image into text that can be copied and pasted by the user."
                category="Software"
              />
              <ProjectCard
                complexity="Medium"
                name="Screenshot Extension"
                videoLink=""
                projectLink=""
                description="A chrome extension that allows the user to take a quick screenshot whenever they need to."
                category="Software"
              />
              <ProjectCard
                complexity="Medium"
                name="Secure Password Generator"
                videoLink=""
                projectLink=""
                description="A python project that generates a random, secure password that is a length of the users choosing."
                category="Software"
              />
              <ProjectCard
                complexity="Medium"
                name="Pong"
                videoLink=""
                projectLink=""
                description="A javascript game where the user can play pong with someone or againts the computer."
                category="Software"
              />
            </div>
          </Paper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
