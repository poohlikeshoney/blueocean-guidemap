import { Container, Row } from "react-bootstrap";
import { CardItem } from "../component/CardItem.jsx";
import axios from "axios";

export function Index(props) {
  let shoes = props.shoes;
  const setShoes = props.setShoes;
  return (
    <Container>
      <Row>
        {shoes.map((item, idx) => {
          return <CardItem key={idx} shoes={item} />;
        })}
      </Row>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              shoes = [...shoes, ...result.data];
              setShoes(shoes);
            })
            .catch((err) => console.log(err));
        }}
      >
        더보기
      </button>
    </Container>
  );
}
