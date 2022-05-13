import React from "react";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import AboutMeCard from "../components/AboutMeCard";
import SkillsCard from "../components/SkillsCard";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
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
                Work Experience
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
              <WorkCard companyLogo="https://media-exp1.licdn.com/dms/image/C560BAQFV4nq83Kdh5w/company-logo_200_200/0/1631797952321?e=2147483647&v=beta&t=cIQAmz62o_QgpgMKEOr0BXkkltTj-b3BCn1DKQq7K3c" companyName="Flynn Group of Companies"/>
            </div>
          </Paper>
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
                complexity="Medium"
                name="My Website"
                projectLink=""
                description="The react web app that is currently displaying the content. It uses a combination of JavaScript, JSX, and CSS to produce the stylish, dynamic content."
                category="Software"
                toolsUsed={["javascript", "react"]}
              />
              <ProjectCard
                complexity="Complex"
                name="Resume Generator"
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
                name="Screenshot Extension"
                projectLink=""
                description="A chrome extension that allows the user to take a quick screenshot whenever they need to."
                category="Software"
                toolsUsed={["javascript"]}
              />
              <ProjectCard
                complexity="Medium"
                name="Secure Password Generator"
                projectLink=""
                description="A python project that generates a random, secure password that is a length of the users choosing."
                category="Software"
                toolsUsed={["python"]}
              />
              <ProjectCard
                complexity="Medium"
                name="Pong"
                projectLink=""
                description="A javascript game where the user can play pong with someone or againts the computer."
                category="Software"
                toolsUsed={["javascript"]}
              />
              <ProjectCard
                complexity="Complex"
                name="4-Bit Computer"
                projectLink=""
                description="A system that could be used to manage a large group of students, with many unique attributes."
                category="Software"
                toolsUsed={["hardware"]}
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
