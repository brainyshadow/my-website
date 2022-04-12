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
import MyAvitar from "../Media/MyAvitar.png";

function AboutMeCard() {
  return (
    <>
      <Card
        sx={{
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
          margin: "1rem ",
          height: "90%",
        }}
      >
        <div style={{ height: "90%", margin: "0" }}>
          <CardHeader
            avatar={<Avatar alt="Brainy Shadow" src={MyAvitar} />}
            subheader={
              <Typography variant="title" color="text.primary">
                Seb Atkinson
              </Typography>
            }
            sx={{ margin: "0rem" }}
          ></CardHeader>
          <Divider
            sx={{
              width: "75%",
              margin: "auto",
            }}
          ></Divider>
          <CardContent>
            <Typography
              variant="body1"
              color="text.secondary"
              fontSize={"0.9rem"}
            >
              I'm a young aspiring developer who loves to code! My hobbies
              include everything from mountain biking, to FPV drones, to chess,
              to cool projects. Of these projects I like everything from
              interactive web development to low level hardware development.
            </Typography>
          </CardContent>
        </div>
        <div style={{ height: "10%", margin: "0 0.5rem 0 0.5rem" }}>
          <Button size="small" href="/about">
            Learn More
          </Button>
        </div>
      </Card>
    </>
  );
}

export default AboutMeCard;
