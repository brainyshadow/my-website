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
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "0.2rem",
}));

function SkillsCard() {
  return (
    <>
      <Card
        sx={{
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
          margin: "1rem",
        }}
      >
        <CardHeader
          title={
            <Typography variant="title" color="text.primary">
              Skills
            </Typography>
          }
        ></CardHeader>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={4}>
            <Item
              sx={{
                boxShadow: 0,
              }}
            >
              Languages
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item
              sx={{
                boxShadow: 0,
              }}
            >
              Tech Stacks
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item
              sx={{
                boxShadow: 0,
              }}
            ></Item>
          </Grid>
          <Grid item xs={4}>
            <Item
              sx={{
                boxShadow: 0,
              }}
            ></Item>
          </Grid>
        </Grid>
        <Divider
          sx={{
            width: "90%",
            display: "flex",
            margin: "auto",
          }}
        ></Divider>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See Resume</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default SkillsCard;
