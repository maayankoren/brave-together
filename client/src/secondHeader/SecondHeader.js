import React from "react";
import Button from '@mui/material/Button';
import './SecondHeader.scss';
import { createUseStyles } from 'react-jss';

const SecondHeader = ({ color, buttons }) => { //Colors: #FF9466 / #8DA7B2

    const styles = createUseStyles({
        button: {
            color        : 'black',
            borderRadius: '4px !important',
            width: '172.33px',
            height: '28px',
            padding: '23px',
            fontFamily: 'Rubik',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '14px',
            '&:hover': {
                backgroundColor: '#FF9466'
            }
        }
    })

    const classes = styles();

    return (
        <div className="SecondHeader">
            <ul id="buttons">
                {buttons.map((button, index) =>
                    <li>
                        <Button className={classes.button} href={button.rout}>
                            {button.name}
                        </Button>
                    </li>)}
            </ul>
        </div>
    );
}

export default SecondHeader;