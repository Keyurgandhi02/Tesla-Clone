import { createSlice } from "@reduxjs/toolkit";

const storeData = localStorage.getItem("token-data");

const initData = {
  token: storeData,
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initData,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      state.token = true;
      localStorage.setItem("token-data", state.token);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token-data");
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
