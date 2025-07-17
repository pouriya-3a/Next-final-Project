import { Card, CardContent, Typography, Box, Grid, id } from "@mui/material";
import Link from "next/link";

export default function CardImage({ image, title, description, height = 400 }) {
  return (
    <Grid
      sx={{ p: "8px" }}
      size={{
        xs: 12,
        md: 6,
      }}
    >
      <Link href={`/games/${id}/title`}>
        <Card
          sx={{
            position: "relative",
            height: height,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
              transform: "scale(1.02)",
              transition: "all 0.3s ease",
            },
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)",
              zIndex: 1,
            }}
          />
          <CardContent
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              color: "white",
              zIndex: 2,
              padding: 3,
              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
            }}
          >
            <Typography variant="h5" component="div" sx={{ fontWeight: "bold", mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
