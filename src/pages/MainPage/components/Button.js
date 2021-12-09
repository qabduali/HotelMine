// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import AuthService from "../../../services/auth.service";

const STYLES = ['Btn--Primary', 'Btn--Outline', 'Btn--Test'];

const SIZES = ['Btn--Medium', 'Btn--Large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  console.log(AuthService.getCurrentUser());
  const link = AuthService.getCurrentUser() ? '/user': '/login';

  return (
    <Link to={link} className='Btn-Mobile'>
      <button
        className={`Btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
