/* eslint-disable */
import { useEffect, useState } from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../App.scss';

export default function Detail(props) {
  // let [modal, setModal] = useState(true);
  // let [num, setNum] = useState('');
  let [탭, 탭변경] = useState(0);

  let { id } = useParams();
  let findshoes = props.shoes.find(function (x) {
    return x.id == id;
  });
  const number = Number(id);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setModal(false);
  //   }, 2000);
  // }, []);
  // useEffect(() => {
  //   if (isNaN(num) == true) {
  //     alert('그러지마세요');
  //   }
  // }, [num]);

  return (
    <Container className="Container">
      {/* {modal == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null} */}
      {/* <input
        onChange={e => {
          setNum(e.target.value);
        }} */}

      <Row>
        <Col>
          <img
            src={`https://codingapple1.github.io/shop/shoes${number + 1}.jpg`}
            alt="shoes"
            width="80%"
          />
        </Col>
        <Col>
          <h4 className="pt-5">{findshoes.title}</h4>
          <p>{findshoes.content}</p>
          <p>{findshoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 탭={탭} />
    </Container>
  );
}
function TabContent({ 탭 }) {
  // if (props.탭 == 0) {
  //   return <div className="tap">내용0</div>;
  // } else if (props.탭 == 1) {
  //   return <div className="tap">내용1</div>;
  // } else if (props.탭 == 2) {
  //   return <div className="tap">내용2</div>;
  // }
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭];
}
