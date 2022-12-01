import axios from 'axios';
import { useState } from 'react';
import '../App.scss';

export default function ShoesBtn({ shoes, setShoes }) {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(null);

  return (
    <div className="shoescontainer">
      {count <= 3 ? (
        <button
          className="shoesbtn"
          onClick={() => {
            setCount(count + 1);
            setLoading(true);
            console.log(count);
            axios
              .get('https://codingapple1.github.io/shop/data' + (count + 1) + '.json')
              .then(결과 => {
                setLoading(false);
                const shoesCopy = [...shoes, ...결과.data];
                setShoes(shoesCopy);
                console.log(결과.data);
              })
              .catch(() => {
                setLoading(false);
                alert('데이터를 가져오지 못했습니다.');
              });
          }}
        >
          더보기
        </button>
      ) : null}

      {loading === true ? <h2>Loading...</h2> : null}
    </div>
  );
}
