import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Slices/AuthSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
  }
};

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  preloadedState: loadState(), 
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
