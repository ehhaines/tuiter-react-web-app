import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "username": "Mars",
 "handle": "@mars",
 "profilePicture": "/images/mars.jpg",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "whenPosted": "2h",
 "liked": false,
 "numComments": 0,
 "numRetweets": 0,
 "numLikes": 0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
  deleteTuit(state, action) {
    const index = state
       .findIndex(tuit =>
          tuit._id === action.payload);
    state.splice(index, 1);
  },
   createTuit(state, action) {
     state.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   }
 }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;