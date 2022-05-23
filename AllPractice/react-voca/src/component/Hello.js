import { useState } from 'react';
import UserName from './UserName';

export default function Hello({ age }) {
  const [name, setName] = useState('Geonhee');
  const [koreanAge, setKoreanAge] = useState(age);
  const msg = koreanAge > 19 ? '성인 입니다.' : '미성년자 입니다.';

  return (
    <div>
      <h2>
        {name}({koreanAge}) : {msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === 'Geonhee' ? 'Jaeyong' : 'Geonhee');
          setKoreanAge(koreanAge + 1);
        }}
      >
        Change Name
      </button>
    </div>
  );
}
