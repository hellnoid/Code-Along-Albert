import { createStore as Store } from "redux";
import { addTodo, toggleTodo } from "./action";
import reducer from "./reducer";

// class Store {
//   constructor(reducer, initState) {
//     this.reducer = reducer;
//     this.state = initState;
//   }
//   getState() {
//     return this.state;
//   }
//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

const initState = {
  todo: [],
};

var store = new Store(reducer, initState);
store.dispatch(addTodo("BUY MILK"));
store.dispatch(addTodo("BUY VINE"));
store.dispatch(addTodo("BUY BREAD"));

console.log(store.getState());

export default Store;
