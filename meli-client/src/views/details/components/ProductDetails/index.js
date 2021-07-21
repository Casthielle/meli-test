import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./style.css";

const Home = ({ product }) => {
  const condition = product.condition === "new" ? "Nuevo" : "Usado";
  const decimals = product.price?.decimals
    .toString()
    .substring(2)
    .padEnd(2, "0");
  return (
    <Container className="product-detail-container">
      <Row>
        <Col xs={8}>
          <figure className="product-detail-picture">
            <img
              width="700"
              height="800"
              src={product.picture}
              alt={product.title}
            />
          </figure>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {condition} | {product.sold_quantity} vendidos
              </Card.Subtitle>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.price?.currency} {product.price?.amount}
                <sup className="decimals">{decimals}</sup>
              </Card.Text>
              <Button size="lg">Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
