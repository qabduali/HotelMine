import React from "react";
import './../../css/Imp_button.css'
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];
const SIZES = ['btn--medium','btn--large'];

function Imp_button(props){

    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle:STYLES[0];

    const checkButtonSize = SIZES.includes(props.buttonSize)? props.buttonSize :SIZES[0];

    return(
        <Link to='/' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={props.onToggle}
            type={props.type}
            >
                {props.children}
            </button>
        </Link>
    );
};

export default Imp_button