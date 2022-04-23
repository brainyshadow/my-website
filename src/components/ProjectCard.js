import { Card, Box, Stack, Typography, Divider, Chip } from "@mui/material";
import { Component } from "react";
import "./ProjectCard.css";
import { FaPython } from "react-icons/fa";
import "../App.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";
import djangoLogo from "../Media/django.png";
import cLogo from "../Media/c.png";
import cplusplusLogo from "../Media/c++.png";
import myDjanoLogo from "../Media/django.png";
import flaskLogo from "../Media/flask.png";
import javaLogo from "../Media/java.png";
import javaScriptLogo from "../Media/javascript.png";
import nodeLogo from "../Media/node.jpeg";
import pythonLogo from "../Media/python.png";
import cSharpLogo from "../Media/cSharp.png";
import typescriptLogo from "../Media/typescript.png";
import reactLogo from "../Media/react.png";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      moreInfoLink: props.moreInfoLink,
      githubLink: props.projectLink,
      projectName: props.name,
      complexity: props.complexity,
      description: props.description,
      category: props.category,
      toolsUsed: props.toolsUsed,
      displaySecondaryContent: false,
    };
    this.state = initialState;
  }

  displaySecondaryContent() {
    this.setState({ displaySecondaryContent: true });
  }

  hideSecondaryContent() {
    this.setState({ displaySecondaryContent: false });
  }

  render() {
    const {
      moreInfoLink,
      githubLink,
      projectName,
      complexity,
      description,
      toolsUsed,
      displaySecondaryContent,
    } = this.state;
    let icons = [];
    const lowerCaseTools = toolsUsed;
    if (lowerCaseTools?.includes("python")) {
      icons.push(<img className="my-tool-logo" height={40} src={pythonLogo} />);
    }
    if (lowerCaseTools?.includes("javascript")) {
      icons.push(
        <img className="my-tool-logo" height={40} src={javaScriptLogo} />
      );
    }
    if (lowerCaseTools?.includes("node.js")) {
      icons.push(<img className="my-tool-logo" height={40} src={nodeLogo} />);
    }
    if (lowerCaseTools?.includes("c++")) {
      icons.push(
        <img className="my-tool-logo" height={40} src={cplusplusLogo} />
      );
    }
    if (lowerCaseTools?.includes("java")) {
      icons.push(<img className="my-tool-logo" height={40} src={javaLogo} />);
    }
    if (lowerCaseTools?.includes("c")) {
      icons.push(<img className="my-tool-logo" height={40} src={cLogo} />);
    }
    if (lowerCaseTools?.includes("c#")) {
      icons.push(<img className="my-tool-logo" height={40} src={cSharpLogo} />);
    }
    if (lowerCaseTools?.includes("flask")) {
      icons.push(<img className="my-tool-logo" height={40} src={flaskLogo} />);
    }
    if (lowerCaseTools?.includes("django")) {
      icons.push(
        <img className="my-tool-logo" height={40} src={myDjanoLogo} />
      );
    }
    if (lowerCaseTools?.includes("typescript")) {
      icons.push(
        <img className="my-tool-logo" height={40} src={typescriptLogo} />
      );
    }
    if (lowerCaseTools?.includes("react")) {
      icons.push(<img className="my-tool-logo" height={40} src={reactLogo} />);
    }

    let color = "#6495ED";
    if (complexity.toLowerCase() === "complex") {
      color = "#FFA500";
    }
    if (complexity.toLowerCase() === "easy") {
      color = "#33CC33";
    }
    const displayedComplext = "Complexity: " + complexity;
    return (
      <div className="card-container">
        <Card
          sx={{
            alignItems: "center",
            bgcolor: "#F5F5F5",
            borderRadius: "12px",
            boxShadow: 2,
            fontWeight: "bold",
            width: "17rem",
          }}
        >
          {displaySecondaryContent ? (
            <>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  height: "7rem",
                }}
                onMouseLeave={() => this.hideSecondaryContent()}
              >
                <div className="display-container">
                  <div className="centered">{icons}</div>
                </div>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  height: "7rem",
                }}
                onMouseOver={() => this.displaySecondaryContent()}
              >
                <Stack spacing={0.5}>
                  <Typography fontWeight={700}>{projectName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </Stack>
              </Box>
            </>
          )}
          <Divider />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: "#A9A9A9" }}
            onMouseOver={() => this.hideSecondaryContent()}
          >
            <div>
              <a style={{ margin: "0.4rem" }} href={githubLink}>
                <GoMarkGithub className="nav-logo" />
              </a>
              <a style={{ margin: "0.4rem" }} href={moreInfoLink}>
                <AiFillInfoCircle className="nav-logo" />
              </a>
            </div>

            <Typography color="white" fontWeight={300}>
              <Chip sx={{ backgroundColor: color }} label={displayedComplext} />
            </Typography>
          </Stack>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
