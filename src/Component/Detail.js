/* eslint-disable */
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../App.css';

export default function Detail(props) {
  let { id } = useParams();
  let findshoes = props.shoes.find(function (x) {
    return x.id == id;
  });

  return (
    <Container>
      <Row>
        <Col>
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            alt="shoes"
            width="40%"
          />
          <h4 className="pt-5">{findshoes.title}</h4>
          <p>{findshoes.content}</p>
          <p>{findshoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </Col>
      </Row>
    </Container>
  );
}
