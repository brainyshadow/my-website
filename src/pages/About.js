import React from "react";
import Nav from "../components/Nav";
import { Button } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import AboutMeCard from "../components/AboutMeCard";
import SkillsCard from "../components/SkillsCard";
import "./About.css";
import Footer from "../components/Footer";

function About() {
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
                A little more
              </Typography>
            </div>

            <Divider
              sx={{
                width: "90%",
                display: "flex",
                margin: "auto",
              }}
            ></Divider>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ margin: "2rem" }}
            >
              Hi, my name is Seb. You've already read a bit about me so far but
              here, you can get a better idea of who I am and what I am about.
              Keep reading to find out a little more about me.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ margin: "2rem" }}
            >
              I have enjoyed coding for a while but at the end of 2021 I set a
              personal goal to build as many fully functioning, usefull
              programming projects as possible. I set this goal because I had
              developemnt these skills through courses, reading and more but
              really had nothing to show my skills. The first one of these
              projects was this website. It's built using MUI, React, and
              React-Bootstrap. From there, I built a few other web apps each
              doing unuqie, useful and intersting things. They have all been fun
              and good practice to make. I hope you enjoy looking through them.
              Take a look at my&nbsp;
              <a href="https://github.com/brainyshadow">GitHub</a> to see more.
            </Typography>
          </Paper>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
