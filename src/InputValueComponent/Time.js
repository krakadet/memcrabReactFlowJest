// @flow
import React from 'react';

const Time = () => {
  function weekDay(date) {
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пятниця', 'субота'];
    return days[date.getDay()];
  }
  const date = new Date();
  console.log('date====>>>>', date);
  console.log('getDate()====>>>>', date.getDate());
  return (
    <div>
      <p>
current day
        {date.getDate()}
        <br />
        current year
        {' '}
        {date.getFullYear()}
        <br />
        current day with UTC
        {' '}
        {date.getUTCDay()}
        <br />
       date with native lang
        {' '}
        {date.toLocaleString('ru') }
        <br />
      Date.now
        {' '}
        {Date.now()}
        <br />
      day of week
        {' '}
        {weekDay(date)}
      </p>
    </div>
  );
};

export default Time;
