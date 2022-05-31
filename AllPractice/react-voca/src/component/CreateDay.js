import { useEffect, useState } from 'react';

export default function CreateDay() {
  const [dayCount, setDayCount] = useState(0);

  const dayPlus = () => {
    fetch(`http://localhost:3010/days`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        day: dayCount + 1
      })
    }).then(res => {
      if (res.ok) {
        fetch('http://localhost:3010/days')
          .then(res => res.json())
          .then(days => {
            setDayCount(days.length);
          });
      }
    });
  };

  useEffect(() => {
    fetch('http://localhost:3010/days')
      .then(res => res.json())
      .then(days => {
        setDayCount(days.length);
      });
  }, []);

  return (
    <div>
      <h3>현재 일수 : {dayCount}일</h3>
      <button onClick={dayPlus}>Day 추가</button>
    </div>
  );
}
