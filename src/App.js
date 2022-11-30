import { Routes, Route } from 'react-router-dom';
import Main from './Component/Main';
import Detail from './Component/Detail';
import { Shoes } from './Component/Shoes';
import Event from './Component/Event';
import One from './Component/One';
import Two from './Component/Two';
import data from './Data';
import { useState } from 'react';
import Cart from './Component/Cart';

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />}>
          <Route path="shoes" element={<Shoes shoes={shoes} />} />
          <Route path="detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<One />} />
            <Route path="two" element={<Two />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
