"use client";
import { Navbar } from "@/Components/Navbar";
import { Container, Grid, Pagination, Paper, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";
const GetData = async () => {
  const res = await fetch(url);
  return res.json();
};

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetData().then(data => setData(data));
  }, []);

  const perView = 4;
  const count = Math.ceil(data.length / perView);
  const [startIndex, setStartIndex] = useState(0);  // Start from the first item
  const [endIndex, setEndIndex] = useState(perView);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const newStartIndex = (value - 1) * perView;
    const newEndIndex = newStartIndex + perView;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  return (
    <main>
      <Navbar />
      <Container sx={{ my: 5 }}>
        <Grid container spacing={2}>
          {data.slice(startIndex, endIndex).map(({ id, name, username }) => {
            return (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Paper sx={{ p: 1 }}>
                  <Typography sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <AccountCircleIcon /> {name}
                  </Typography>
                  <Typography sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <AccountCircleIcon /> {username}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          count={count}
          color="primary"
          sx={{
            my: 3,
            mx: 'auto',
            width: 'fit-content'
          }}
          onChange={handleChange}
        />
      </Container>
    </main>
  );
};

export default Home;
