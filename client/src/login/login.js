import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { spacing } from '@mui/system';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function login() {

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
            <TextField id="outlined-basic, fullWidth" color="black" label="Outlined" variant="outlined" />


        </Box>


    );
}
