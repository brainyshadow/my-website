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
        <div className="my-content-container">
          <div className="my-title-container">
            <div className="large-card-container">
              <div className="my-about-me-container">
                <AboutMeCard />
              </div>
              <div className="my-skills-card-container">
                <SkillsCard />
              </div>
            </div>
          </div>
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
                moreInfoLink=""
                projectLink=""
                description="A simple, NPM module that adds a progress bar with customizable, color, width, and height to a project."
                category="Software"
                toolsUsed={["typescript"]}
              />
              <ProjectCard
                complexity="Complex"
                name="Resume Generator"
                moreInfoLink=""
                projectLink=""
                description="A python project that uses the pdfkit library to generates a resume based on user input and a custom template."
                category="Software"
                toolsUsed={[
                  "react",
                  "python",
                  "flask",
                  "javascript",
                  "mongodb",
                ]}
              />
              <ProjectCard
                complexity="Medium"
                name="College Management System"
                moreInfoLink=""
                projectLink=""
                description="A system that could be used to manage a large group of students, with many unique attributes."
                category="Software"
                toolsUsed={["sql"]}
              />
              <ProjectCard
                complexity="Medium"
                name="Screenshot Extension"
                moreInfoLink=""
                projectLink=""
                description="A chrome extension that allows the user to take a quick screenshot whenever they need to."
                category="Software"
                toolsUsed={["javascript"]}
              />
              <ProjectCard
                complexity="Medium"
                name="Secure Password Generator"
                moreInfoLink=""
                projectLink=""
                description="A python project that generates a random, secure password that is a length of the users choosing."
                category="Software"
                toolsUsed={["python"]}
              />
              <ProjectCard
                complexity="Medium"
                name="Pong"
                moreInfoLink=""
                projectLink=""
                description="A javascript game where the user can play pong with someone or againts the computer."
                category="Software"
                toolsUsed={["javascript"]}
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
