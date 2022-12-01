/* eslint-disable eqeqeq */
import { Col, Row } from 'react-bootstrap';
import ShoesBtn from './ShoesBtn';

export function Shoes({ shoes, setShoes }) {
  return (
    <>
      <div>
        <Row className="col">
          {shoes.map((a, i) => {
            return <Shoesdata shoes={shoes[i]} i={i} key={i} />;
          })}
        </Row>
      </div>
    </>
  );
}

function Shoesdata({ shoes, i }) {
  return (
    <Col md={4}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} alt="shoes" width="80%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <p>{shoes.price}</p>
    </Col>
  );
}
