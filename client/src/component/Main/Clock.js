import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
  font-size: 20px;
  letter-spacing: px;
`;

function Clock() {
  const [time, setTime] = useState('');
  const birthDate = new Date('2020-07-20'); // Set your birthdate here

  useEffect(() => {
    const showTime = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const h = currentDate.getHours(); // 0 - 23
      const m = currentDate.getMinutes(); // 0 - 59
      const s = currentDate.getSeconds(); // 0 - 59
      const session = h < 12 ? 'AM' : 'PM';

      const currentTime = `${formatTime(h)}:${formatTime(m)}:${formatTime(s)} ${session}`;
      const remainingDays = calculateRemainingDays(currentDate, birthDate);
      const dDay = `D-${remainingDays}`;

      const fullDate = `${year}년 ${formatTime(month)}월 ${formatTime(day)}일`;
      const dateTime = `${currentTime} - ${fullDate} (${dDay})`;

      setTime(dateTime);
    };

    showTime();
    const timer = setInterval(showTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const calculateRemainingDays = (currentDate, birthDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const diffDays = Math.ceil((currentDate - birthDate) / oneDay);

    return diffDays >= 0 ? diffDays : 0;
  };

  return <ClockContainer>{time}</ClockContainer>;
}

export default Clock;
