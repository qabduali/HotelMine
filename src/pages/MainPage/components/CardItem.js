import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../../../services/auth.service";

function CardItem(props) {
  const link = AuthService.getCurrentUser() ? '/user': '/login';
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={link}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
