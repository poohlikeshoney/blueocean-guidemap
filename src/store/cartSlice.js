import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseCountById(state, action) {
      const id = action.payload;
      const index = state.findIndex((value) => value.id === id);

      if (index >= 0) {
        state[index].count++;
      }
    },
    order(state, action) {
      const product = action.payload;

      // 장바구니에 같은 id 가 있는지 검사
      const existProduct = state.some((value) => value.id === product.id);

      if (existProduct) {
        return alert("장바구니에 이미 들어가있습니다.");
      }
      // 장바구니 state 에 추가
      state.push({ id: product.id, name: product.title, count: 1 });
    },
  },
});

export let { increaseCountById, order } = cart.actions;
export default cart;
