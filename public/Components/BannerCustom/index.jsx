import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function CustomBanner(){
  return (
    <Box sx={{
      width: '100%',
      height: 200,
      background: 'linear-gradient(90deg, rgba(23,12,64,0) 0%, rgba(23,12,64,1) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Right-side info box */}
      <Box sx={{
        position: 'absolute',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        bgcolor: 'white',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        textAlign: 'center',
        minWidth: 180
      }}>
        <Typography variant="body1" sx={{ 
          color: 'text.secondary', 
          mb: 2,
          fontWeight: 500 
        }}>
          Know More About Us
        </Typography>
        
        <Button 
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #170C40, #4A2FBF)',
            color: 'white',
            px: 3,
            py: 1,
            '&:hover': {
              background: 'linear-gradient(to right, #4A2FBF, #170C40)',
            }
          }}
        >
          About Us
        </Button>
      </Box>
    </Box>
  );
};

