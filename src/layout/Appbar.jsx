import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

export function Appbar() {
  let navigate = useNavigate(); // 페이지 이동 도와주는 함수

  let result = useQuery("작명", () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((result) => {
        console.log("요청됨");
        return result.data;
      });
  });

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          APPLE SHOPPING
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/detail");
            }}
          >
            Detail
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          {result.isLoading ? "로딩중" : result.data.name}
        </Nav>
      </Container>
    </Navbar>
  );
}
