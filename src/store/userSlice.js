import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park';
    },
    increase1(state, a) {
      state.age += a.payload;
    }
  }
});

export let { changeName, increase1 } = user.actions;

export default user;
