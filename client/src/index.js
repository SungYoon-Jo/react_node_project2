import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App3 from './App3';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Noto Sans KR", serif',
  },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App3 /></MuiThemeProvider>, document.getElementById('root'));
