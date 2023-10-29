import React from 'react';

export function getImageUrl(person) {
    return (
      'https://avatars.githubusercontent.com/u/15922543?v=4'+
      //person.imageId +
      'portfolio.png'
    );
  }

export function Item({ nam, isPacked }) {
  return (
    <li className="item">
      {nam} {isPacked && '✔'}
    </li>
  );
}