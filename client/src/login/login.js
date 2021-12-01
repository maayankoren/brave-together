import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';
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

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

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

        <Box
            sx={{
                mx: 'auto',
                px: 2,
                pt: 3,
                textAlign: 'center',
                fontWeight: 'medium',
                backgroundColor: 'white',
            }}
        >
            <Box sx={{ fontSize: 20 }}>{data.header.content.join('\n')}</Box>
            <img src="/logo1.png" alt="logo" />
            <TextField fullWidth id="email" label="אימייל" variant="outlined" margin="normal" />

            <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel htmlFor="outlined-adornment-password">סיסמה</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="start"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="סיסמה"
                />
            </FormControl>
            <FormGroup style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between" }}>
                {/* <FormControlLabel control={<Checkbox />}  label="זכור אותי"/> */}
                <Checkbox style={{ marginTop: "0" }}/>
                זכור אותי
                <NavLink to={"/"}>שכחת סיסמה?</NavLink>
            </FormGroup>
            

        </Box>


    );
}
