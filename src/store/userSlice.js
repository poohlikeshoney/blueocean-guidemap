import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "이범수", age: 27 },
  reducers: {
    updateName(state) {
      state.name = "이이이";
    },
    increaseAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { updateName, increaseAge } = user.actions;
export default user;
