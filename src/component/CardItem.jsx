import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function CardItem(props) {
  const id = props.shoes.id;
  const navigate = useNavigate();
  const toDetail = (id) => () => {
    navigate("/detail/" + id);
  };
  return (
    <Col xl={4} onClick={toDetail(id)}>
      <img src={props.shoes.img} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
}
