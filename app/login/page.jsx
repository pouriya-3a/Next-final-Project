"use client";
import { authContext } from "@/utils/AuthContext";
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Container, 
  Paper, 
  CircularProgress,
  Link as MuiLink,
  InputAdornment,
  IconButton
} from '@mui/material';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const { token, handleToken } = useContext(authContext);
  const [fields, setFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token, router]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSub = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      handleToken(data.token);
      router.push('/');
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (token) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ 
        p: 4, 
        background: 'linear-gradient(145deg, rgba(23,12,64,0.1) 0%, rgba(74,47,191,0.1) 100%)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            mb: 4,
            background: 'linear-gradient(to right, #170C40, #4A2FBF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}
        >
          Welcome Back!
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
            {error}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSub} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            sx={{
              '& .MuiInputLabel-root': {
                color: 'rgba(255,255,255,0.7)',
              },
              '& .MuiOutlinedInput-root': {
                color: '#ffffff',
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4A2FBF',
                },
              }
            }}
            InputLabelProps={{
              style: { color: 'rgba(255,255,255,0.7)' },
            }}
          />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            sx={{
              '& .MuiInputLabel-root': {
                color: 'rgba(255,255,255,0.7)',
              },
              '& .MuiOutlinedInput-root': {
                color: '#ffffff',
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.3)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255,255,255,0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#4A2FBF',
                },
              }
            }}  
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              py: 1.5,
              background: 'linear-gradient(to right, #170C40, #4A2FBF)',
              '&:hover': {
                background: 'linear-gradient(to right, #4A2FBF, #170C40)',
              }
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
          </Button>

          <Typography variant="body2" sx={{ textAlign: 'center', mt: 2, color: 'rgba(255,255,255,0.7)' }}>
            Don't have an account?{' '}
            <MuiLink component={Link} href="/register" sx={{ color: '#9c84ff' }}>
              Sign up
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}