import {
  Card,
  Box,
  Avatar,
  Stack,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { Component } from "react";
import "./ProjectCard.css";

import "../App.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillYoutube } from "react-icons/ai";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      videoLink: props.videoLink,
      githubLink: props.projectLink,
      projectName: props.name,
      complexity: props.complexity,
      description: props.description,
      category: props.category,
    };
    this.state = initialState;
  }
  render() {
    const {
      videoLink,
      githubLink,
      projectName,
      complexity,
      description,
      category,
    } = this.state;
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
            boxShadow: 1,
            fontWeight: "bold",
            width: "17rem",
          }}
        >
          <Box
            sx={{
              p: 2,
              display: "flex",
            }}
          >
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{projectName}</Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Stack>
          </Box>

          <Divider />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: "#A9A9A9" }}
          >
            <div>
              <a style={{ margin: "0.4rem" }} href={githubLink}>
                <GoMarkGithub className="nav-logo" />
              </a>
              <a style={{ margin: "0.4rem" }} href={videoLink}>
                <AiFillYoutube className="nav-logo" />
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
