import './App.css';
import React, {useState} from 'react'
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Box, Typography, Container, Grid, Paper, AppBar, Toolbar, IconButton } from '@mui/material';
import { alpha, ThemeProvider, createTheme } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { blue, orange, green } from '@mui/material/colors';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function CustomBox() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      bgcolor: 'background.paper',
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: 1,
      fontWeight: 'bold',
      width: '75%',
      margin: '0 auto',
    }}
  >
    <Box
      component="img"
      sx={{
        height: 233,
        width: 350,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
      }}
      alt="The house from the offer."
      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
    />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        m: 3,
        minWidth: { md: 350 },
      }}
    >
      <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
        123 Main St, Phoenix AZ
      </Box>
      <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
        $280,000 — $310,000
      </Box>
      <Box
        sx={{
          mt: 1.5,
          p: 0.5,
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          borderRadius: '5px',
          color: 'primary.main',
          fontWeight: 'medium',
          display: 'flex',
          fontSize: 12,
          alignItems: 'center',
          '& svg': {
            fontSize: 21,
            mr: 0.5,
          },
        }}
      >
        <ErrorOutlineIcon />
        CONFIDENCE SCORE 85%
      </Box>
    </Box>
  </Box>
  )
}

// Custom theme
const customTheme = createTheme({
  typography: {
    h1: '50px'
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: blue[50]
    }
  }
})

function CheckboxExample() {
  const [checked, setChecked] = useState(true)

  return (
    <div>
      <FormControlLabel control={ <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} color="info" 
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
      label="Testing label"      
       />        
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth='lg'>
        <div className="App">
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
              Learn Material UI
            </Typography>
            <Button style={{color: 'black', marginLeft:'auto'}} variant='contained'>
              Login
            </Button>
          </Toolbar>
        </AppBar>
          <Typography variant='h4' component='h1'>
            Custom card
          </Typography>       
          <CustomBox />

          <Typography variant='h4' component='h1' mt={10}>
            Grid example
          </Typography> 
          <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12} md={3}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
          </Grid>
      
          <Typography variant='h4' component='h1' mt={10}>
            Text Input Field
          </Typography>      
          <TextField id="standard-basic" label="The time" variant="standard" color="secondary" type="time" />

          <Typography variant='h4' component='h1' mt={10}>
            Checkbox
          </Typography>         
          <CheckboxExample />

          <Typography variant='h4' component='h1' mt={10}>
            Button Group
          </Typography>    
          <ButtonGroup size="large" variant="contained" color="secondary">
            <Button style={{ fontSize: 24 }} startIcon={<SaveIcon />} >Save</Button>
            <Button style={{ fontSize: 24 }} startIcon={<DeleteIcon />} >Delete</Button>
          </ButtonGroup> 
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
