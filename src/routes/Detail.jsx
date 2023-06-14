import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
//import styled from "styled-components";
import { Context1 } from "../App.jsx";
import { order } from "../store/cartSlice.js";
import { useDispatch } from "react-redux";

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   }};
//   color: ${(props) => (props.bg === "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// let NewBtn = styled.button(YellowBtn)

function Detail(props) {
  let [show, setShow] = useState(false);
  let [fade, setFade] = useState("");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(!show);
  //   }, 2000);
  //   // return () => {
  //   //  clearTimeout(a) setTimeout 제거
  //   // } useEffect 안 return 함수는 해당 useEffect 동작 전에 실행되는 클린업 함수
  // }, []); // (() => {}, [] "[] => 상태 감지")

  // // 빡통식
  // useEffect(() => {}); // 재랜더링 마다 코드 실행
  // useEffect(() => {}, []); // mount 시 1회만
  // useEffect(() => {
  //   return () => {
  //     // 3.unmount시 1회 코드실행 하고 싶으면
  //   };
  // });

  //let [count, setCount] = useState(0);

  const { shoes } = props;
  const { shoesId } = useParams();
  const hasShoes = shoes.some(({ id }) => id === Number(shoesId));
  let dispatch = useDispatch();
  let navigate = useNavigate(); // 페이지 이동 도와주는 함수
  let [tab, setTab] = useState(0);
  let [test, setTest] = useState("");

  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem("watched"));

    if (!watched.includes(shoesId)) {
      localStorage.setItem("watched", JSON.stringify([...watched, shoesId]));
    }
  }, []);

  useEffect(() => {
    if (isNaN(test)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [test]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(timeout);
      setFade("");
    };
  }, []);

  return (
    <div className={`container start ${fade}`}>
      {/*{show ? (*/}
      {/*  <div className="alert alert-warning">2초 이내 구매시 할인</div>*/}
      {/*) : null}*/}
      {/*<YellowBtn bg={"blue"}>버어튼</YellowBtn>*/}
      {/*<YellowBtn bg={"orange"}>버어튼</YellowBtn>*/}

      {hasShoes ? (
        <div className="row">
          <div className="col-md-6">
            <img src={shoes[shoesId].img} width="100%" />
          </div>
          <div className="col-md-6">
            {show ? (
              <div className="alert alert-warning">숫자만 입력하라고</div>
            ) : null}
            <input
              type="text"
              value={test}
              onChange={({ target }) => {
                setTest(target.value);
              }}
            />
            <h4 className="pt-5">{shoes[shoesId].title}</h4>
            <p>{shoes[shoesId].content}</p>
            <p>{shoes[shoesId].price}원</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(order(shoes[shoesId]));
              }}
            >
              주문하기
            </button>
          </div>
        </div>
      ) : (
        <h4>상품이 존재하지 않습니다</h4>
      )}

      <Nav variant={"tabs"} defaultActiveKey={"link0"}>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={shoes} />
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  let { 재고 } = useContext(Context1);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(timeout);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
