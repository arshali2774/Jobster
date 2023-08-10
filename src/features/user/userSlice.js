import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  'user/registeration',
  async (user, thunkAPI) => console.log('Register user', user)
);
export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => console.log('Login user', user)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
});

export default userSlice.reducer;
