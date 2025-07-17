import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  CircularProgress,
  Container,
} from "@mui/material";
import Link from "next/link";
import GamingCard from "./GamingCard";

const fetchData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export default async function Games() {
  const Games = await fetchData();

  if (!Games) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #170C40 0%, #4A2FBF 100%)",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h4" color="white" gutterBottom>
            Failed to load products
          </Typography>
          <Typography color="rgba(255,255,255,0.7)">Please try again later</Typography>
        </Box>
      </Box>
    );
  }

  const items = Games?.map((product) => (
    <GamingCard product={product} key={product?.id} />
  ));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background: "linear-gradient(145deg, rgba(23,12,64,0.05) 0%, rgba(74,47,191,0.05) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 6,
            textAlign: "center",
            background: "linear-gradient(to right, #170C40, #4A2FBF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Our Products
        </Typography>

        <Grid container spacing={4}>
          {items}
        </Grid>
      </Container>
    </Box>
  );
}
