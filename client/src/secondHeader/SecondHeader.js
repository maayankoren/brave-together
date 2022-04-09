import React from "react";
import Button from '@mui/material/Button';
import './SecondHeader.scss';
import {createUseStyles} from 'react-jss';

const SecondHeader = ({ color, buttons }) => { //Colors: #FF9466 / #8DA7B2
  
    const styles = createUseStyles({
        student : {
          border : '2px solid green',
          width: '40%',
          listStyleType:'none'
        },
       
        studentDetails : {
          color : 'blue',
          fontSize : '23px'
        }
      })
      
      return (
        <div className="SecondHeader">
            <ul id="buttons" className={styles}>
                {buttons.map((button, index) =>
                    <li>
                        <Button className="Button" href={button.rout} color="success">
                            {button.name}
                        </Button>
                    </li>)}
            </ul>
        </div>
    );
}

export default SecondHeader;