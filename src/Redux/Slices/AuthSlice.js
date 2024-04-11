import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userName: null,
  email: null,
  expireDate: null,
  refreshToken: null,
  refreshTokenExpiration: null,
  userJob: null,
  appUserId: null,
  DomainId:null
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.token = action.payload.token
      state.username = action.payload.username
      state.email = action.payload.email
      state.expireDate = action.payload.expireDate
      state.refreshToken = action.payload.refreshToken
      state.refreshTokenExpiration = action.payload.refreshTokenExpiration
      state.appUserId = action.payload.appUserId
      state.isActive=action.payload.isActive
      state.emailConfirmed=action.payload.emailConfirmed
    },
    SetDomainId: (state, action) => {
      state.DomainId = action.payload
    },
    setUserStatusAction: (state, action) => {
      state.emailConfirmed = action.payload
    },
    logoutAction: (state, action) => {
      return initialState;
    },
    registerAction: (state, action) => {
      return action.payload;
    },
  },
});

// Export actions and reducer
export const { loginAction, logoutAction, registerAction, SetDomainId,setUserStatusAction } = AuthSlice.actions;
export default AuthSlice.reducer;
