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
import { FacebookIcon,  } from 'react-share';
import { useTheme } from '@mui/core/styles';

export default function Login() {

    const theme = useTheme();
    
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
            <Button variant="contained" color={theme.pallate.secondary.dark}
                style={{ marginTop: "10px", width: "100%", height: "50px", fontSize: "20px" }}>התחבר</Button>

            <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", fontSize: "13px" }}>
                <hr size="5" color="#000000" width="90px" noshade style={{ marginTop: "29px" }} />
                <br />או באמצעות
                <hr size="5" color="#000000" width="90px" noshade style={{ marginTop: "29px" }} />
            </FormGroup>

            <FormGroup style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", fontSize: "13px" }}>
            <FacebookIcon size={40}></FacebookIcon>
            <img src="/google icon.png" alt="google" />

            </FormGroup>

        </Box>


    );
}
