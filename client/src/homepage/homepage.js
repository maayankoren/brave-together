import React from 'react';
import { useHistory } from "react-router-dom";
import './homepage.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Body, Div, DivForm, FullInput, Root } from '../auth/Design/styledComponents';

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


function Homepage() {

    let history = useHistory();

    const onStartButtonClick = () => {
        let token = localStorage.getItem('token');
        /*
        if (!token) {
            this.props.history.push('/login');
        }
    
        else {
            this.props.history.push('/storyCheck');
        }
        */
        //for development, moving directly to storyCheck even without token..

        history.push({
            pathname: '/storyCheck',
            state: {
                template: { id: 1, backgroundImg: 'images/frame2.png', templateImg: `images/template1.png` }
            }
        })
    }

    let data = {
        "headerTitle": {
            "content": [],
            "color": "white",
            "fontSize": "14vh"
        },
        "openingText": {
            "content": [
                "ברוכים הבאים למקום בו אפשר ליצור",
                "*#העצמה_אחת_ביום*",
                "בהשראת סיפורים של גיבורים וגיבורות מהשואה.",
                "המוטו שלנו הוא \"לעשות\" ולא לשכוח.",
                "באתר אתם מוזמנים:",
                "לקרוא",
                "סיפורי גבורה, העצמה אישית וסיפורים מעוררי השראה.",
                "לבחור",
                "ציטוט אותו תרצו לשתף. בין אם זה ביום הזכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה."
            ],
            // "content": ["אנו מזמינים אותך ליצור העצמה אישית בהשראת סיפורים של גיבורים וגיבורות מהשואה.",
            //     "המוטו שלנו הוא \"לעשות\" ולא לשכוח. באתר אתם מוזמנים",
            //     "לקרוא סיפורי גבורה, העצמה אישית וסיפורים מעוררי השראה.",
            //     "אנו מזמינים אתכם לקרוא את הסיפורים והעדויות של הגיבורים שלנו ולבחור את הציטוט אותו תרצו לשתף.",
            //     "בין אם זה ביום הזיכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה,",
            //     "אנו מזמינים כל אחד למצוא את הציטוט אליו הוא מתחבר,",
            //     "לעצב אותו באתר ולשתף היכן שתרצו לעוד מידע על העמותה וכלל הפרויקטים שלנו מוזמנים לאתר מצעד הגבורה"],
            "boldContent": "לקרוא",
            "color": "white",
            "fontSize": "14vh"
        },
        "developmentInfo": {
            "content": "על פיתוח האתר...",
            versions: [
                {
                    "1.1": {
                        "number": "1.1",
                        "members": ""
                    }
                },
                {
                    "1.2": {
                        "number": "1.2",
                        "members": ""
                    }
                }
            ]
        },
        "letsStartButton": {
            "content": "בואו נתחיל",
            "rout": "() => this.onStartButtonClick()"
        }
    }

    return (
        <div className='homepage-container' dir="rtl">
            <div className="pcComponent">
                <Body>
                    <h1 className='header'>
                        {data.headerTitle.content.join()}
                    </h1>
                    <div className='opening-text'>
                        {data.openingText.content[0]} <br />
                        <b>{data.openingText.content[1]}</b><br />
                        {data.openingText.content[2]} <br />
                        {data.openingText.content[3]} <br />
                        {data.openingText.content[4]} <br />
                    </div>
                    <br /><br />
                    <div className='developmentInfo'>
                        {data.developmentInfo.content}
                        {data.developmentInfo.versions[0].number}: <br />
                        {data.developmentInfo.versions[0].members}
                        {data.developmentInfo.versions[1].number}: <br />
                        {data.developmentInfo.versions[1].members}
                    </div>
                    <button onClick={onStartButtonClick}>בואו נתחיל</button>
                </Body>
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
                        }}
                        dir="rtl"
                    >


                        <img src="/logo1.png" alt="logo" width="220px" height="90px" />


                    </Box>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Homepage;