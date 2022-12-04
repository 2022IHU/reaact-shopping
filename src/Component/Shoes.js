/* eslint-disable eqeqeq */
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Shoes({ shoes, setShoes }) {
  console.log(shoes);
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
      <Link to={`/detail/${i}`}>
        <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} alt="shoes" width="80%" />
      </Link>
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <p>{shoes.price}</p>
    </Col>
  );
}
