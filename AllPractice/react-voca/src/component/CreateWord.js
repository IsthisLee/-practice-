import useFetch from '../hooks/useFetch';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

export default function CreateWord() {
  const days = useFetch('http://localhost:3010/days');
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3010/words`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false
      })
    }).then(res => {
      if (res.ok) {
        alert('생성이 완료되었습니다!');
        // eslint-disable-next-line no-restricted-globals
        if (confirm('더 만드실?') === true) {
          dayRef.current.value = 1;
          engRef.current.value = null;
          korRef.current.value = null;
        } else {
          navigate(`/day/${dayRef.current.value}`);
        }
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="ex) computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="ex) 컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
