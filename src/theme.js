import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontSize: 20
    },
    palette: {
        primary: {
            light: '#1b1b1b',
            main: '#6d6d6d',
            dark:'#000a12',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ffffe4',
            main: '#ffe0b2',
            dark: '#cbae82',
            contrastText: '#000'
        }
    }
});

theme.props = {
    MuiButton: {
        fullWidth: true
    },
    MuiTooltip: {
        arrow: true,
        placement: 'top'
    },
    MuiIconButton: {
        edge: 'end'
    },
    MuiTextField: {
        autoFocus: true,
        maxLength: 20
    }
};

theme.overrides = {
    MuiButton: {
        root: {
            borderRadius: '5px',
            textTransform: 'none',
            maxWidth: '1000px',
            marginBottom: '10px',
            fontWeight: 700,
            fontSize: '1.5rem',
        },
        containedPrimary: {
            "&:hover": {
                backgroundColor: theme.palette.primary.light
            }
        }
    },
    MuiButtonBase: {
        root: {
            
        }
    },
    MuiTooltip: {
        tooltip: {
            backgroundColor: theme.palette.primary.dark,
            border: `1px solid ${theme.palette.primary.dark}`,
            color: theme.palette.primary.contrastText
        },
        arrow: {
            color: theme.palette.primary.dark
        }
    },
    MuiIconButton: {
        root: {
            outline: 'none',
            "&:nth-last-child()": {
                paddingRight: '20px'
            }
        }
    },
    MuiTextField: {
        root: {
            maxWidth: '1000px',
            fontSize: '3rem',
        }
    },
    MuiFilledInput: {
        root: {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: 'white'
            },
            '&.Mui-focused': {
                backgroundColor: theme.palette.primary.light
            }
        }
    },
    MuiFormControl: {
        root: {
            width: '80%'
        }
    }
}

export default theme;
