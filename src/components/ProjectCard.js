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
import { purple, red } from '@mui/material/colors';


class ProjectCard extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      videoLink: props.videoLink,
      githubLink: props.projectLink,
      projectName: props.name,
      complexity: "Complexity: " + props.complexity,
      description: props.description,
    };
    this.state = initialState;
  }

  render() {
    const { videoLink, githubLink, projectName, complexity, description } = this.state;
    const primary = red[500]; // #f44336

    return (
      <div className="card-container">
        <Card>
          <Box sx={{ p: 2, display: "flex", width: "20rem" }}>
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{projectName}</Typography>
              <Typography variant="body2" color="text.secondary" >{description}</Typography>
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
                href={githubLink}
              >
                <GoMarkGithub className="nav-logo" />
              </a>
              <a
                style={{ margin: "0.4rem" }}
                href={videoLink}
              >
                <AiFillYoutube className="nav-logo" />
              </a>
            </div>
            <Typography fontWeight={300}>
              <Chip  label={complexity} color="primary"/>
            </Typography>
          </Stack>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
