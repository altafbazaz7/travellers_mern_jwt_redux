import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../API";


export const login = createAsyncThunk("auth/login", async({LoginDetails,navigate}) => {
    try{
        const response = await API.signIn(LoginDetails);
        navigate("/");
        return response.data
    }catch(err){
        console.log(err)
    }
})

export const register = createAsyncThunk("auth/register", async({RegisterDetails,navigate}) => {
  try{
      const response = await API.signUp(RegisterDetails);
      navigate("/");
      return response.data
  }catch(err){
      console.log(err)
  }
})


const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      error: "",
      loading: false,
    },
    reducers: {
        setLogout: (state,action) => {
          localStorage.clear();
          state.user = null;
        },
        setUser : (state,action) => {
          state.user = action.payload;
        },
        setLoading: (state, action) => {
          state.loading = action.payload
        }
    },
    extraReducers: {
        [login.pending]: (state,action) => {
          state.loading = true;
        },
        [login.fulfilled]: (state,action) => {
          state.loading = false;
          localStorage.setItem('LoggedIn', JSON.stringify({...action.payload}))
          state.user = action.payload
        },
        [login.rejected]: (state,action) => {
          state.loading = false;
          state.error = action.payload.message
        },
        [register.pending]: (state,action) => {
          state.loading = true;
        },
        [register.fulfilled]: (state,action) => {
          state.loading = false;
          localStorage.setItem('Registered', JSON.stringify({...action.payload}))
          state.user = action.payload
        },
        [register.rejected]: (state,action) => {
          state.loading = false;
          state.error = action.payload.message
        },

      }
  });


  export const { setLogout,setUser,setLoading } = authSlice.actions;
  export default authSlice.reducer;