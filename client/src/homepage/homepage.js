import React from 'react';
import { useHistory } from "react-router-dom";
import './homepage.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Div, DivForm, FullInput, Root } from '../auth/Design/styledComponents';
import Card from '@mui/material/Card';

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
            "content": [
                "ברוכים הבאים למקום בו אפשר ליצור",
                "#העצמה_אחת_ביום"
            ],
            "color": "white",
            "fontSize": "14vh"
        },
        "openingText": {
            "content":
                "בהשראת סיפורים של גיבורים וגיבורות מהשואה." +
                "המוטו שלנו הוא \"לעשות\" ולא לשכוח." +
                "באתר אתם מוזמנים:" +
                " לקרוא " +
                "סיפורי גבורה, העצמה אישית<b> וסיפורים </b>מעוררי השראה." +
                "לבחור" +
                "ציטוט אותו תרצו לשתף. בין אם זה ביום הזכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה.",
            // "oldContent": ["אנו מזמינים אותך ליצור העצמה אישית בהשראת סיפורים של גיבורים וגיבורות מהשואה.",
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
                <Card sx={{ p: "40px", maxWidth: "150vh" }}>
                    <h1 className='header'>
                        <img src="/logo1.png" alt="logo" width="220px" height="90px" style={{ "margin-top": "100px", "margin-bottom": "100px" }} />
                        <br />
                        ברוכים הבאים למקום בו אפשר ליצור <br />
                        <b>#העצמה_אחת_ביום</b>
                    </h1><br />
                    <div className='opening-text'>
                        בהשראת סיפורים של גיבורים וגיבורות מהשואה.<br />
                        המוטו שלנו הוא "לעשות ולא לשכוח". <br />
                        באתר אתם מוזמנים:
                        <ul>
                            <li><b>לקרוא</b> סיפורי גבורה, העצמה אישית וסיפורים מעוררי השראה. </li>
                            <li><b>לבחור</b> סיפור אותו תרצו לשתף.
                                בין אם זה ביום הזיכרון, בחגי ישראל, בימים המיוחדים לכם או פשוט בשגרה.</li>
                            <li><b>לעצב</b> אותו באתר ולשתף היכן שתרצו.</li>
                        </ul>
                    </div><br />
                    <div className='closing-text'>
                        לעוד מידע על העמותה וכלל הפרויקטים שלנו מוזמנים לאתר מצעד הגבורה
                        <br />
                        <button onClick={onStartButtonClick}>בואו נתחיל</button>
                    </div>
                    <br /><br />
                    <div className='developmentInfo'>
                        {data.developmentInfo.content}
                        {data.developmentInfo.versions[0].number}: <br />
                        {data.developmentInfo.versions[0].members}
                        {data.developmentInfo.versions[1].number}: <br />
                        {data.developmentInfo.versions[1].members}
                    </div>
                </Card>
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