import { Box, Container, Typography, List, ListItem, ListItemText, Link, IconButton, Stack } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

export default function Footer(){
  return (
    <Box sx={{
        borderTop:'1px solid darkOrange',
      background: 'linear-gradient(90deg, #170C40 0%, #090130 100%)',
      color: 'white',
      py: 6,
      mt: 8
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4
        }}>
          {/* Title Section */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h2" sx={{
              fontWeight: 'bold',
              mb: 1,
              background: 'linear-gradient(to right, darkOrange, #FFFFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Mr.Gaming plays with Soul!
            </Typography>
            <Typography variant="body2">
              Where every game tells a story
            </Typography>
          </Box>

          {/* Navigation Links - Hardcoded */}
          <List dense sx={{
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'row' },
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, sm: 4 },
            py: 2
          }}>
            <ListItem sx={{ width: 'auto', p: 0 }}>
              <Link href="/" color="inherit" underline="hover">
                <ListItemText primary="Home" sx={{ '& .MuiTypography-root': { fontWeight: 500 } }} />
              </Link>
            </ListItem>
            <ListItem sx={{ width: 'auto', p: 0 }}>
              <Link href="/games" color="inherit" underline="hover">
                <ListItemText primary="Games" sx={{ '& .MuiTypography-root': { fontWeight: 500 } }} />
              </Link>
            </ListItem>
            <ListItem sx={{ width: 'auto', p: 0 }}>
              <Link href="/about-us" color="inherit" underline="hover">
                <ListItemText primary="About Us" sx={{ '& .MuiTypography-root': { fontWeight: 500 } }} />
              </Link>
            </ListItem>
            <ListItem sx={{ width: 'auto', p: 0 }}>
              <Link href="/login" color="inherit" underline="hover">
                <ListItemText primary="Login" sx={{ '& .MuiTypography-root': { fontWeight: 500 } }} />
              </Link>
            </ListItem>
          </List>

          {/* Social Media - Hardcoded */}
          <Stack direction="row" spacing={2}>
            <IconButton aria-label="Facebook" sx={{ color: 'white', '&:hover': { background: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)' }}}>
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{ color: 'white', '&:hover': { background: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)' }}}>
              <Twitter />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ color: 'white', '&:hover': { background: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)' }}}>
              <Instagram />
            </IconButton>
            <IconButton aria-label="YouTube" sx={{ color: 'white', '&:hover': { background: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)' }}}>
              <YouTube />
            </IconButton>
          </Stack>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ 
          textAlign: 'center', 
          mt: 4,
          opacity: 0.8
        }}>
          2025 Mr.Gaming. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
