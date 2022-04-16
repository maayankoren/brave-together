import React from "react";
import Button from '@mui/material/Button';
import './SecondHeader.scss';

function SecondHeader({ color, buttons }) {
    //color: orange / blue, buttons: an array of buttons with attributes 'name' and 'rout'

    return (
        <div className="SecondHeader">
            <ul id="buttons">
                {buttons.map((button, index) =>
                    <li>
                        <Button id='Button' className={color} href={button.rout}>
                            {button.name}
                        </Button>
                    </li>)}
            </ul>
        </div>
    );
}

export default SecondHeader;
