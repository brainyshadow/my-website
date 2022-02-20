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
import "../App.css";

function About() {
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
              variant="body"
              color="text.primary"
              gutterBottom={true}
              sx={{ margin: "1rem" }}
            >
             Here's where a bit of information about me will go.
            </Typography>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default About;
