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
              borderRadius: "2px",
              boxShadow: 0,
              fontWeight: "bold",
              margin: "1rem 0.5rem 0.5rem 0.5rem",
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
              <WorkCard
                companyLogo="https://media-exp1.licdn.com/dms/image/C560BAQFV4nq83Kdh5w/company-logo_200_200/0/1631797952321?e=2147483647&v=beta&t=cIQAmz62o_QgpgMKEOr0BXkkltTj-b3BCn1DKQq7K3c"
                companyName="Flynn Group of Companies"
                jobDates={["01/2022", "05/2022"]}
                jobTitle="IoT Developer/Designer"
              />
              <WorkCard
                companyLogo="https://media-exp1.licdn.com/dms/image/C560BAQFV4nq83Kdh5w/company-logo_200_200/0/1631797952321?e=2147483647&v=beta&t=cIQAmz62o_QgpgMKEOr0BXkkltTj-b3BCn1DKQq7K3c"
                companyName="Flynn Group of Companies"
                jobDates={["06/2021", "08/2021"]}
                jobTitle="Quality Assurance Developer"
              />

              <WorkCard
                companyLogo="https://media-exp1.licdn.com/dms/image/C560BAQFV4nq83Kdh5w/company-logo_200_200/0/1631797952321?e=2147483647&v=beta&t=cIQAmz62o_QgpgMKEOr0BXkkltTj-b3BCn1DKQq7K3c"
                companyName="Flynn Group of Companies"
                jobDates={["06/2020", "08/2020"]}
                jobTitle="Quality Assurance Developer"
              />
              <WorkCard
                companyLogo="https://lh5.googleusercontent.com/p/AF1QipNY1RpIlvihR1W2ACJaH1Y9Wus64g2Uh3_th22E"
                companyName="Big Boys With Cool Toys"
                jobDates={["09/2017", "09/2019"]}
                jobTitle="Sales and Support Associate"
              />
            </div>
          </Paper>
          <Paper
            sx={{
              alignItems: "center",
              bgcolor: "background.paper",
              overflow: "hidden",
              borderRadius: "2px",
              boxShadow: 0,
              fontWeight: "bold",
              margin: "0.5rem 0.5rem 0.5rem 0.5rem",
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
                complexity="Complex"
                name="Resume Generator"
                projectLink="https://github.com/BrainyShadow/resume-maker"
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
                complexity="Complex"
                name="Secure Password Generator"
                projectLink="https://github.com/BrainyShadow/secure-password-generator"
                description="A python project that generates a random, secure password that is a length of the users choosing."
                category="Software"
                toolsUsed={["python", "qt"]}
              />
              <ProjectCard
                complexity="Medium"
                name="My Website"
                projectLink="https://github.com/BrainyShadow/my-website"
                description="The react web app that is currently displaying the content. It uses a combination of JavaScript, JSX, and CSS to produce the stylish, dynamic content."
                category="Software"
                toolsUsed={["javascript", "react"]}
              />
              <ProjectCard
                complexity="Medium"
                name="Screenshot Extension"
                projectLink="https://github.com/BrainyShadow/screenshot-extension"
                description="A chrome extension that allows the user to take a quick screenshot whenever they need to."
                category="Software"
                toolsUsed={["javascript"]}
              />

              <ProjectCard
                complexity="Medium"
                name="Pong"
                projectLink="https://github.com/BrainyShadow/pong"
                description="A javascript game where the user can play pong with someone or againts the computer."
                category="Software"
                toolsUsed={["javascript"]}
              />
              <ProjectCard
                complexity="Medium"
                name="Foosball Scoreboard"
                projectLink="https://github.com/BrainyShadow/foosball-scoreboard"
                description="An Arduino based scoreboard that automatically counts the score of a fooseball game using two wirless sensors."
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
