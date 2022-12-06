/* eslint-disable eqeqeq */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice.js';

export let cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex(a => a.id === action.payload);
      state[번호].count++;
    },
    minusCount(state, action) {
      let 번호 = state.findIndex(a => a.id === action.payload);
      if (state[번호].count > 0) state[번호].count--;
    },
    addItem(state, action) {
      let 번호 = state.findIndex(a => a.id === action.payload);
      if (번호 >= 0) {
        state[번호].count++;
      } else {
        state.push(action.payload);
      }
    },
    deleteCount(state, action) {
      let 번호 = state.findIndex(a => a.id === action.payload);
      state.splice(번호);
      console.log(번호);
    }
  }
});

export let { addCount, minusCount, addItem, deleteCount } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
});
