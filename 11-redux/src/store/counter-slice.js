// This file is an example for splitting store into multiple files
// for cleaning and maintainable redux store
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // react toolkit internally overrides state in an immutable way
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increase(state, action) {
      // any argument/extra data passed in action is stored in payload property by toolkit
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

// export const counterActions = counterSlice.actions;
// export default counterSlice.reducer;
