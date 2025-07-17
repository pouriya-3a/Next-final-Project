import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function GamingCard({product}) {
  return (
    <Grid size={{ xs:12, sm:6, md:4, lg:3,}} key={product?.id}>
      <Link href={`games/${product?.id}/${product?.title.replaceAll(" ", "-")}`} passHref>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            boxShadow: `
              0 4px 6px rgba(23, 12, 64, 0.1),
              0 1px 3px rgba(0, 0, 0, 0.08),
              inset 0 0 10px rgba(74, 47, 191, 0.1)
            `,
          }}
        >
          <Box
            sx={{
              p: 2,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <CardMedia
              component="img"
              image={product?.id % 2 == 0 ? "/Media/RE4-Remake-Gameplay.jpg" : "/Media/1384649.jpg"}
              alt={product?.title}
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                transition: 'transform 0.3s ease',
              }}
            />
          </Box>

          <CardContent sx={{ 
            flexGrow: 1,
            background: 'linear-gradient(to bottom, rgba(23, 12, 64, 0.1), rgba(23, 12, 64, 0.3))',
          }}>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              sx={{
                color: 'white',
                fontWeight: 600,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product?.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: 'rgba(255, 255, 255, 0.7)',
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product?.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "auto",
              }}
            >
              <Typography variant="h6" sx={{ 
                color: 'green',
                fontWeight: 700,
              }}>
                ${product?.price}
              </Typography>

              <Chip
                label={`${product?.rating.rate} ★ (${product?.rating.count})`}
                size="small"
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}