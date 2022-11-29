/* eslint-disable eqeqeq */
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate, Outlet } from 'react-router-dom';
import '../img/bg.png';
import '../App.scss';
import axios from 'axios';
import { useState } from 'react';

export default function Main(props) {
  let navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(null);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/shoes');
              }}
            >
              제품목록
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/event');
              }}
            >
              이벤트페이지
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Outlet></Outlet>
      <div className="shoescontainer">
        {count <= 3 ? (
          <button
            className="shoesbtn"
            onClick={() => {
              setCount(count + 1);
              setLoading(true);
              axios
                .get(
                  'https://codingapple1.github.io/shop/data' +
                    (count + 1) +
                    '.json'
                )
                .then(결과 => {
                  setLoading(false);
                  const shoesCopy = [...props.shoes, ...결과.data];
                  props.setShoes(shoesCopy);
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
    </div>
  );
}
