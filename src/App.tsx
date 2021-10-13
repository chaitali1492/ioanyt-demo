import React from 'react';
import IndexPage from './page/index/Index';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

let theme = createTheme({
  typography:{
    fontSize: 12,
  },
  palette:{
    primary:{
      main:'#8A368B',
      light:'#F7F1FB'
    },
    secondary:{
      main:'#000',
      light:'#b8b8b8'
    },
    warning:{
      main:"#BC3239"
    }
    
  },
  
})

theme = createTheme(theme,{
  typography:{
    h4: {
      color:theme.palette.primary.main,//"#854486"
      fontWeight:"bold",
      textTransform:'uppercase'
    },
    body1:{
      color:theme.palette.secondary.main,
      fontWeight:"bold"
    }
  },
  components:{
    MuiPaper :{
      styleOverrides:{
        root:{
          backgroundColor: theme.palette.primary.light,
          borderRadius:"30px",
          padding:theme.spacing(2)
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
     <IndexPage/>
    </ThemeProvider>
  );
}

export default App;
