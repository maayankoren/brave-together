import React from "react";
import Button from '@mui/material/Button';
import './SecondHeader.scss';

function SecondHeader({ color, buttons }) {
    //colors: orange / blue, buttons: an array of buttons with the attributes 'name' and 'rout'
    //Example: <SecondHeader buttons={[{name: 'מאגר סיפורים', rout: '/about'}, {name: 'ציטוטים', rout: '/about'}]} color='blue' />

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