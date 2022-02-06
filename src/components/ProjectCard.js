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
import "../App.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillYoutube } from "react-icons/ai";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    console.log(props.name);
    const initialState = {
      videoLink: props.videoLink,
      githubLink: props.projectLink,
      projectName: props.name,
      complexity: "Complexity: " + props.complexity,
    };
    this.state = initialState;
  }

  render() {
    const { videoLink, githubLink, projectName, complexity } = this.state;
    return (
      <div className="card-container">
        <Card>
          <Box sx={{ p: 2, display: "flex" }}>
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{projectName}</Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </Stack>
          </Box>

          <Divider />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: "background.default" }}
          >
            <div>
              <a
                style={{ margin: "0.4rem" }}
                href="https://github.com/seb997a/DDB"
              >
                <GoMarkGithub className="nav-logo" />
              </a>
              <a
                style={{ margin: "0.4rem" }}
                href="https://www.youtube.com/embed/SYQoG84IRUQ"
              >
                <AiFillYoutube className="nav-logo" />
              </a>
            </div>

            <Typography fontWeight={300}>
              <Chip label={complexity} />
            </Typography>
          </Stack>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
