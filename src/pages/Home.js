import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Grid,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://awful-pink-fawn.cyclic.app/posts"
      );
      setPosts(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Main />
      <Container sx={{ mt: 6 }}>
        <Grid container spacing={5}>
          {posts &&
            posts.map((item) => {
              return (
                <Grid key={item.id} item md={3} sx={{ height: "650px" }}>
                  <Link
                    to={"/product/" + item.id}
                    style={{ textDecoration: "none" }}
                  >
                    <Card item={item} />
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
