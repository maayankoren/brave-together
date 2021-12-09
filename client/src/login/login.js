import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let data = {

        "header": {
            "content": ["אנו מזמינים אותך ליצור",
                "#העצמה_אחת_ביום",
                "בהשראת סיפורי הגיבורים והגיבורות שלנו"],
            "color": "black",
        },
    }

    return (
        <MuiThemeProvider theme={theme}>

            <Box
                sx={{
                    mx: 'auto',
                    px: 2,
                    pt: 3,
                    textAlign: 'center',
                    fontWeight: 'medium',
                    backgroundColor: 'white',
                }}
                dir="rtl"
            >
                <Box sx={{ fontSize: 20 }}>{data.header.content.join('\n')}</Box>
                <img src="/logo1.png" alt="logo" width="220px" height="90px" />
                <TextField fullWidth id="email" label="אימייל" variant="outlined" margin="normal" />

                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel htmlFor="outlined-adornment-password">סיסמה</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="סיסמה"
                    />
                </FormControl>
                <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "13px" }}>
                    <FormControlLabel control={<Checkbox style={{ marginTop: "-1" }} />} label="זכור אותי" />
                    <NavLink to={"/"} style={{ margin: "9px", color: "#c53d13", textDecoration: "none" }}>שכחת סיסמה?</NavLink>
                </FormGroup>
                <Button variant="contained" color="secondary"
                    style={{ marginTop: "10px", width: "100%", height: "50px", fontSize: "20px" }}>התחבר</Button>

                <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", fontSize: "13px" }}>
                    <hr size="5" color="#000000" width="90px" noshade style={{ marginTop: "29px" }} />
                    <br />או באמצעות
                    <hr size="5" color="#000000" width="90px" noshade style={{ marginTop: "29px" }} />
                </FormGroup>

                <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", fontSize: "13px" }}>
                    <img src="/google icon.png" alt="google" style={{ width: "75px" }} />
                    <img src="/facebook icon.png" alt="facebook" style={{ width: "75px" }} />
                </FormGroup>

                <Button variant="contained" color="error"
                    style={{ marginTop: "10px", width: "100%", height: "50px", fontSize: "20px" }}>הירשם</Button>
                <div style={{ margin: "10px" }}>
                    <NavLink to={"/"} style={{ size: "50px", color: "black", textDecoration: "none" }}>דלג לבינתיים</NavLink>
                </div>

            </Box>


        </MuiThemeProvider>
    );

}
