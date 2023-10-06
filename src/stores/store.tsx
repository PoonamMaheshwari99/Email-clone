import { configureStore } from "@reduxjs/toolkit";
import mailReducer from '../components/mailSlice';
import counterReducer from '../components/counterSlice';
import onchangeReducer from '../components/onchangeSlice';
export const store = configureStore({
reducer:{
mail:mailReducer,
counter:counterReducer,
onchange:onchangeReducer,
},
});