import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';

export default function CustomBanner({ img }){
  return (
    <Box sx={{
      width: '100%',
      height: 200,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <Image
          src={img}
          alt="Banner background"
          fill
          style={{ objectFit: 'cover' }}
          objectPosition={'center'}
          priority
        />
      </Box>

      {/* Gradient Overlay */}
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(23,12,64,0) 0%, rgba(23,12,64,0.8) 100%)',
        zIndex: 2
      }} />

      {/* Content Box */}
      <Box sx={{
        position: 'relative',
        zIndex: 3,
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        px: 4
      }}>
        <Box sx={{
          bgcolor: 'rgba(23,12,64,0.8)',
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
          minWidth: 180
        }}>
          <Typography variant="body1" sx={{ 
            color: 'text.secondary', 
            mb: 2,
            fontWeight: 500 ,
            color:'white'
          }}>
            Know More About Us
          </Typography>
          
          <Button 
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #170C40, #4A2FBF)',
              color: 'white',
              px: 3,
            }}
          >
            About Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
