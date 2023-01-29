# Set up a directory in source folder by the name Redux.

# Set up Store.js in Redux directory

# Configure Store JS like;

<!-- import { configureStore } from "@reduxjs/toolkit";
import REDUCER1 from "./features/REDUCER1";
import REDUCER2 from "./features/REDUCER2";

export default configureStore({
  reducer: {
    redu1: REDUCER1,
    redu2: REDUCER2,
  },
}); -->

# Make a directory in src/Redux by the name Features which should have all the REDUCER files in it.

# Configure the nameSlice.js file like this;

<!-- import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      error: "",
      loading: false,
    },
    reducers: {
      }
  }); -->

  # Objects can be set to null in initial state. 