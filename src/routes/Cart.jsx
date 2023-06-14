import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseAge, updateName } from "../store/userSlice";
import { increaseCountById } from "../store/cartSlice.js";
import { memo, useMemo, useState } from "react";

function f() {
  let test = 0;
  for (let i = 0; i < 1e9; i++) {
    test += i;
  }
  return test;
}

function Cart() {
  let result = useMemo(() => {
    return f();
  });

  let { cart, user } = useSelector((state) => state);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return (
    <div>
      <h6>
        {user.name} {user.age}의 장바구니 입니다.
      </h6>

      <button
        onClick={() => {
          dispatch(increaseAge(1));
        }}
      >
        떡국 1그릇
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>{user.name}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(increaseCountById(item.id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
