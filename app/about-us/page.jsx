import { Box, Container, Typography, Button, Paper } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, rgba(23,12,64,0.03) 0%, rgba(74,47,191,0.03) 100%)',
      py: 8
    }}>
      <Container maxWidth="md">
        {/* Hero Section */}
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1"
            sx={{
              mb: 2,
              background: 'linear-gradient(to right, #170C40, #4A2FBF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            About Mr. Gaming
          </Typography>
        </Box>

        {/* Image Section */}
        <Paper elevation={3} sx={{ mb: 6, borderRadius: 2, overflow: 'hidden' }}>
          <Box sx={{ position: 'relative', height: { xs: 300, sm: 400 } }}>
            <Image
              src="/Media/ZED.jpg" // Replace with your image
              alt="Gaming setup"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>
        </Paper>

        {/* Content Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 6,background: 'linear-gradient(145deg, #170C40 30%, #4A2FBF 100%)', borderRadius: 2 }}>
          <Typography color='darkOrange' variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'medium' }}>
            Our Story
          </Typography>
          <Typography color='lightGray' sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography color='darkGray' sx={{ mb: 2 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography color='gray'>
            At Mr. Gaming, we believe every game should be an adventure. Founded in 2020, 
            we've been dedicated to bringing the best gaming experiences to players worldwide.
          </Typography>
        </Paper>

        {/* CTA */}
        <Box textAlign="center">
          <Link href="/" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                background: 'linear-gradient(to right, #170C40, #4A2FBF)',
                '&:hover': {
                  background: 'linear-gradient(to right, #4A2FBF, #170C40)',
                }
              }}
            >
              Explore Our Games
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}