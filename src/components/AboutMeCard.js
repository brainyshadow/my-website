import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import "../App.css";
import { display } from "@mui/system";
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
          margin: "1rem 0rem 1rem 0rem",
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
            <Typography variant="title" color="text.primary">Brainy Shadow</Typography>
          }
        ></CardHeader>
        <Divider
          sx={{
            width: "75%",
            display: "flex",
            margin: "auto",
          }}
        ></Divider>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            I'm a young aspiring developer who loves to code!
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default AboutMeCard;
