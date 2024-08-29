import jalaali from 'jalaali-js';
import React, { useEffect, useState } from 'react';

const PersianDateTime: React.FC = () => {
  const [dateTime, setDateTime] = useState({
    date: '',
    time: '',
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      // Convert Gregorian to Persian (Jalali) date
      const { jy, jm, jd } = jalaali.toJalaali(
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate(),
      );

      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;

      const dayOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ][now.getDay()];

      const persianMonths = [
        'Farvardin',
        'Ordibehesht',
        'Khordad',
        'Tir',
        'Mordad',
        'Shahrivar',
        'Mehr',
        'Aban',
        'Azar',
        'Dey',
        'Bahman',
        'Esfand',
      ];
      const persianMonth = persianMonths[jm - 1];

      const persianDateString = `${jd} ${persianMonth} ${jy}, ${dayOfWeek}`;

      setDateTime({
        date: persianDateString,
        time: timeString,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-3">
      <p className="text-2xl font-black text-darkBlue">🗓️️{' ' + dateTime.date}</p>
      <p className="text-2xl  font-black text-darkBlue">{dateTime.time}</p>
    </div>
  );
};

export default PersianDateTime;
