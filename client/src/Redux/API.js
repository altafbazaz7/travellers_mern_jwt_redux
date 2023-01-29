import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"});

// ============================USER============================
// Sign in action
export const signIn = (LoginDetails) => API.post("/users/signin" , LoginDetails)
// Sign up action
export const signUp = (RegisterDetails) => API.post("/users/signup" , RegisterDetails)