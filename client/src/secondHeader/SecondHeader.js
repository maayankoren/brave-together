import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import './SecondHeader.scss';

function SecondHeader() {

    const primary = orange['A700'];
    const [isSignedIn, setSignIn] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem('token');

        if (token) {
            setSignIn(true);
        } else {
            setSignIn(false);
        }
    }, [])

    let data = {
        "secondHeader": {
            "color": "black",
            "background-color": "#FF9466",
            "links": [
                {
                    "name": "",
                    "diaplayName": "סיפורים",
                    "rout": "/",
                },
                {
                    "name": "",
                    "diaplayName": "ציטוטים",
                    "rout": "/",
                }
            ],
            "linksSignedIn": [
                {
                    "name": "",
                    "diaplayName": "מאגר סיפורים",
                    "rout": "/",
                },
                {
                    "name": "",
                    "diaplayName": "ציטוטים",
                    "rout": "/",
                },
                {
                    "name": "",
                    "diaplayName": "קריאת סיפור",
                    "rout": "/",
                },

            ]
        }
    }

    return (
        <div className="SecondHeader">
            <ul id="buttons" className={isSignedIn ? "SignedIn" : "SignedOut"}>
                {isSignedIn ?
                    data.secondHeader.linksSignedIn.map((link, index) =>
                        <li>
                            <Button className="Button" href={link.rout}>
                                {link.diaplayName}
                            </Button>
                        </li>)
                    :
                    data.secondHeader.links.map((link, index) =>
                        <li>
                            <Button className="Button" href={link.rout}>
                                {link.diaplayName}
                            </Button>
                        </li>)}
            </ul>
        </div>
    );

}


export default SecondHeader;