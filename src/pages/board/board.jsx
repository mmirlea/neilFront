import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Board() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xl">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar> */}
      <Typography component="h4" variant="p" >
        정렬방식
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ 
        width: 1,     
      }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={1}>
          <Typography component="h4" variant="p" >
            해시태그
          </Typography>
            {/* <TextField
              required
              fullWidth
              id="hasTag"
              label="해시태그"
              name="해시태그"
              autoComplete="family-name"
              sx={{
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7]
                },
              }}
            /> */}
          </Grid>
          <Grid item xs={12} sm={1}>
          </Grid>
        </Grid>
      </Box>

      <Typography component="h4" variant="p">
        게시물
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ 
        width: 1,     
      }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={1}>
          <Typography component="h4" variant="p" >
            게시물
          </Typography>
          </Grid>
        </Grid>
      </Box>

      <Typography component="h4" variant="p">
        가게
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ 
        width: 1,     
      }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={1} sx={{
            position: 'relative',
          }}>
            <Typography component="h4" variant="p" >
              가게
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 5 }} />
  </Container>
  );
}