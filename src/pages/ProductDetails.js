import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Grid,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";

function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://awful-pink-fawn.cyclic.app/posts",
        { params: { id } }
      );
      setData(data[0]);
    };
    fetchData();
  }, []);
  return (
    <>
      {data && (
        <Container
          sx={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={5}>
            <Grid item md={5}>
              <img
                src={data.image}
                style={{ width: "200px", maxHeight: "280px", padding: "30px" }}
              />
            </Grid>
            <Grid item md={7}>
              <Typography variant="h4">{data.title}</Typography>
              <Typography variant="h6">{data.description}</Typography>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default ProductDetails;
