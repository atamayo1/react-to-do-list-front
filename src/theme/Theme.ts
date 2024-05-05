import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#3047B0',
        },
        secondary: {
            main: '#1586ED',
        },
        success: {
            main: '#009A58'
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#2E2E2E',
            secondary: '#989898'
        }
    },
    typography: {
        fontFamily: 'Noto sans, Roboto, sans-serif',
        h1: {
            fontSize: '18px',
            fontWeight: 'bold',
        },
    },
});

export default Theme;
