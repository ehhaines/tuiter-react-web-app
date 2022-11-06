import { createSlice } from "@reduxjs/toolkit";
import userData from "../profile/user.json";

const userSlice = createSlice({
  name: "user",
  initialState: userData,
  reducers: {
    changeFirstName(state, action) {
      state.firstName = action.payload.firstName;
    },
    changeLastName(state, action) {
      state.lastName = action.payload.lastName;
    },
    changeHandle(state, action) {
      state.handle = action.payload.handle;
    },
    changeBio(state, action) {
      state.bio = action.payload.bio;
    },
    changeDOB(state, action) {
      state.dateOfBirth = action.payload.dateOfBirth
    }
  }
 });
 
 export const {
  changeFirstName,
  changeLastName,
  changeHandle,
  changeBio,
  changeDOB
} = userSlice.actions;
 export default userSlice.reducer;