import { createStore } from "redux";
import { counterReducer } from "../Reducer/counterReducer";

export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//dispatch

//actions

//reducer

//global store

//subscription

//useSelector
