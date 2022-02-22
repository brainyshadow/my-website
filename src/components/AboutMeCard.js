import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";
import "../App.css";
import { Grid } from "@mui/material";
import { AiFillExclamationCircle } from "react-icons/ai";

function AboutMeCard() {
  return (
    <>
      <Card
        sx={{
          maxWidth: "25rem",
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
          margin: "1rem ",
          height: "25rem",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              alt="Brainy Shadow"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_QjkzkjJUSlxg7a0bqL5qe2cncFScC_Y0aQ&usqp=CAU"
            />
          }
          subheader={
            <Typography variant="title" color="text.primary">
              Brainy Shadow
            </Typography>
          }
          sx={{ margin: "0.2rem" }}
        ></CardHeader>
        <Divider
          sx={{
            width: "75%",
            display: "flex",
            margin: "auto",
          }}
        ></Divider>
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            I'm a young aspiring developer who loves to code! My hobbies include
            everything from mountain biking, to FPV drones, to chess, to cool
            projects. Of these projects I like everything from interactive web
            development to low lovel hardware development.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="/about">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default AboutMeCard;
