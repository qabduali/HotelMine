import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import imgs2 from './../../../img/img2.jpg'
import imgs3 from './../../../img/img3.jpg'
import imgs4 from './../../../img/img4.jpg'
import imgs5 from './../../../img/img5.jpg'
import imgs6 from './../../../img/img6.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1 className="bigger">Check out these EPIC Hotels!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={imgs2}
              text='Great moment await'
              label='Go to the list of Hotels'
              path='/'
            />
            <CardItem
              src={imgs3}
              text='Reunite with you family'
              label='Go to the list of Hotels'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={imgs4}
              text='Enjoy your dreams'
              label='Go to the list of Hotels'
              path='/'
            />
            <CardItem
              src={imgs5}
              text='Come, stay and enjoy your live'
              label='Go to the list of Hotels'
              path='/'
            />
            <CardItem
              src={imgs6}
              text='Create new memories'
              label='Go to the list of Hotels'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
