import {
  Card,
  Box,
  Avatar,
  Stack,
  Typography,
  IconButton,
  Divider,
  Switch,
  Chip,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Component } from "react";
import { Button } from "react-bootstrap";
import "../App.css";

class MyCard extends Component {
  constructor(props) {
    super(props);
    console.log(props.name);
    const initialState = {
      videoLink: props.videoLink,
      githubLink: props.projectLink,
      projectName: props.name,
    };
    this.state = initialState;
  }

  render() {
    const { videoLink, githubLink, projectName } = this.state;
    console.log(videoLink);
    return (
      <Card>
        <Box sx={{ p: 2, display: "flex" }}>
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>{projectName}</Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </Stack>
          <a href={videoLink} style={{ margin: "0rem 0rem 0rem 60%" }}>
            <Avatar style={{ margin: "0rem" }} src="youtube.png" />
          </a>
        </Box>
        <Divider />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: "background.default" }}
        >
          <a href={githubLink}>
            <Button variant="primary">Learn More</Button>
          </a>
          <Button variant="primary">Intermediate</Button>
        </Stack>
      </Card>
    );
  }
}

export default MyCard;
