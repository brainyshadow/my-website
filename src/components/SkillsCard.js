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
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../App.css";

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
          borderRadius: "2px",
          boxShadow: 0,
          fontWeight: "bold",
          margin: "0.5rem",
          height: "100%",
        }}
      >
        <div style={{ height: "90%", margin: "0" }}>
          <CardHeader
            title={
              <Typography variant="title" color="text.primary">
                Skills
              </Typography>
            }
            sx={{ margin: "0rem" }}
          ></CardHeader>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={5}>
              <Item
                sx={{
                  boxShadow: 0,
                  justifyContent: "center",
                }}
              >
                Languages
                <Divider sx={{ width: "75%", margin: "auto" }}></Divider>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item
                sx={{
                  boxShadow: 0,
                }}
              >
                Framework/Libraries
                <Divider sx={{ width: "75%", margin: "auto" }}></Divider>
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item
                sx={{
                  boxShadow: 0,
                }}
              >
                Additional Tools
                <Divider sx={{ width: "75%", margin: "auto" }}></Divider>
              </Item>
            </Grid>
          </Grid>
          <CardContent>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={5}>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Python
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Javascript, Typescript
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  HTML, CSS
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  C, C++
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  C#
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Java
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  SQL
                </Item>
              </Grid>
              <Grid item xs={5}>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  React
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Node.js
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Bootstrap
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  MUI
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Express.js
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Flask
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  AUTH0
                </Item>
              </Grid>
              <Grid item xs={5}>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Unix
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Git, Github
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  MongoDB
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Azure
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  AWS
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Postman
                </Item>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                >
                  Jira
                </Item>
              </Grid>
              <Grid item xs={5}>
                <Item
                  sx={{
                    boxShadow: 0,
                  }}
                ></Item>
              </Grid>
            </Grid>
          </CardContent>
        </div>
        <div style={{ height: "10%", margin: "0 0.5rem 0 0.5rem" }}>
          <Button size="small" href="/resume">
            Resume
          </Button>
        </div>
      </Card>
    </>
  );
}

export default SkillsCard;
