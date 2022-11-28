import { Col, Row } from 'react-bootstrap';

export default function Shoes(props) {
  return (
    <div>
      <Row className="col">
        {props.shoes.map((a, i) => {
          return <Shoesdata shoes={props.shoes[i]} i={i} key={i} />;
        })}
      </Row>
    </div>
  );
}

function Shoesdata(props) {
  return (
    <Col sm>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        alt="shoes"
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
}
