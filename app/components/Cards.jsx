import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/coolbreezewebsite.png'
              text='Property management website with back-end utility.'
              label='CoolBreezeTexas.com'
              path='www.coolbreezetexas.com'
            />
            <CardItem
              src='images/PokeDash.png'
              text='Pokemon style delivery game with my interactive resume. '
              label='PokeDasher'
              path='www.ryan-soto.com/PokeDasher/'
            />
            <CardItem
              src='images/Github.png'
              text='My personal Github. You can see the source code for any of my projects.'
              label='Github'
              path='https://github.com/RyanSoto?tab=repositories'
            />
          </ul>
        </div>
      </div>

  );
}

export default Cards;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}