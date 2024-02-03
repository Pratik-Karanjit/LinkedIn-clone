import { createSlice } from "@reduxjs/toolkit";

//Initializing a slice and initial state as null as there may not be a user logged in
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  //Creating two reducers for specifying how the state of an application changes in response to dispatched actions
  //When login is dispatched, the login reducer is invoked
  //The action.payload is assumed to contain the new user information.
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    //When logout is dispatched, the logout reducer is invoked and updates user state to null
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selectors
//This allows components to pull the information
//The state parameter represents the entire Redux state.
//So, when you access state.user.user, you are drilling down into the "user" slice of the Redux state and specifically accessing the data stored in the "user" property or
// sub-slice within that slice.
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
