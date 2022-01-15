import React, { useState, useCallback } from 'react';
import { Submit, Input, DivForm, Input2, Label2, Header, Label, LogoImg, Body } from './Design/styledComponents';
import { useHistory, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/images/Logo.jpg';
import axios from 'axios';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Login.css";
import validator from 'validator'


const theme = createTheme({
    palette: {
        primary: {
            main: '#616161',
            dark: '#373737',
        },
        secondary: {
            main: '#ff6900',
            dark: '#ba000d',
        },
    },
});

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
        emailError: ''
    });

    let history = useHistory();

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        if (prop == "email") {
            var email = event.target.value
            if (validator.isEmail(email)) {
                setValues({ ...values, emailError: '' })
            } else {
                setValues({ ...values, emailError: 'כתובת האימייל חייבת להיות חוקית.' })
            }
        }
    };

    const handleSubmit = () => {

    }

    //////////////Old functions:
    // handleChange(event) {
    //     const input = event.target;
    //     const value = input.value;
    //     this.setState({ [input.name]: value });
    // }

    // async handleSubmit(event) {
    //     event.preventDefault();
    //     console.log("state : ", this.state.email);

    //     let axiosConfig = {
    //         headers: {
    //             'Content-Type': 'application/json  ',
    //             "Access-Control-Allow-Origin": "*",
    //         }
    //     };

    //     await axios.get("http://localhost:5000/token", {
    //         auth: {
    //             username: this.state.email,
    //             password: this.state.password
    //         }
    //     }) // calling api request to create a new user
    //         .then(response => {
    //             localStorage.setItem('token', response.data.token);

    //             alert("logged in successfully!");
    //             this.props.history.push("/");
    //         });
    // }

    let data = {
        "header": {
            "content": ["אנו מזמינים אותך ליצור",
                "#העצמה_אחת_ביום",
                "בהשראת סיפורי הגיבורים והגיבורות שלנו"],
            "color": "black",
        },
    }

    return (
        <div className='login'>
            <div className="pcComponent">
                <DivForm>
                    <LogoImg src="https://brave-together.com/wp-content/uploads/2021/05/%D7%9C%D7%95%D7%92%D7%95-%D7%A8%D7%99%D7%91%D7%95%D7%A2%D7%99-%D7%A9%D7%A7%D7%95%D7%A3-300x300.png" width="128" height="128"></LogoImg>
                    <Header>התחברות</Header>
                    <form onSubmit={handleSubmit()}>
                        <Label htmlFor="emailBox">כתובת אימייל </Label>
                        <Input id="emailBox" type="email" name="email" value={values.email} onChange={handleChange('email')} required style={{ marginRight: "auto", marginLeft: "auto" }}></Input>
                        <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{values.emailError}</span>
                        <Label htmlFor="passwordBox">סיסמא </Label>
                        <Input id="passwordBox"
                            type="password"
                            name="password"
                            value={values.password}
                            required
                            onChange={handleChange('password')}></Input>
                        <br></br>
                        <Submit type="submit" value="הרשמה"></Submit>
                    </form>
                    <div style={{ height: "50px", color: "white" }}>
                        <Link to="/">פתיחת חשבון חדש</Link>
                    </div>
                    <br></br>
                </DivForm>
            </div>

            <div className="phoneComponent">
                <ThemeProvider theme={theme}>
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
                        <TextField fullWidth id="email" label="אימייל" variant="outlined" margin="normal" onChange={handleChange('email')} />
                        <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{values.emailError}</span>
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
                        <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <FormControlLabel control={<Checkbox style={{ marginTop: "-1" }} />} label="זכור אותי" />
                            <NavLink to={"/"} style={{ margin: "9px", color: "#c53d13", textDecoration: "none" }}>שכחת סיסמה?</NavLink>
                        </FormGroup>
                        <Button variant="contained" color="secondary" className="button">התחבר</Button>
                        <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                            <hr size="5" color="#000000" width="90px" noshade style={{ marginTop: "29px" }} />
                            <br />או באמצעות
                            <hr size="5" color="#000000" width="90px" noshade style={{ marginTop: "29px" }} />
                        </FormGroup>
                        <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", fontSize: "13px" }}>
                            <img src="/google icon.png" alt="google" style={{ width: "75px" }} onClick="/" />
                            <img src="/facebook icon.png" alt="facebook" style={{ width: "75px" }} onClick="/" />
                        </FormGroup>
                        <Button variant="contained" color="primary" className="button">הירשם</Button>
                        {/* <div style={{ margin: "10px" }}> */}
                        <Box sx={{ height: 50, padding: 1.5 }}>
                            <NavLink to={"/"} style={{ fontSize: "17px", color: "black", textDecoration: "none" }}>דלג לבינתיים</NavLink>
                            {/* </div> */}

                        </Box>
                    </Box>
                </ThemeProvider>
            </div>
        </div>
    );
}
