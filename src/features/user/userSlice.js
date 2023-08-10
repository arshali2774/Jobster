import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import customFetch from '../../utils/axios';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from '../../utils/localStorage';

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  'user/registeration',
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post('/auth/register', user);
      return res.data.user;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post('/auth/login', user);
      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToLocalStorage(payload);
        toast.success(`Hello there ${payload.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToLocalStorage(payload);

        toast.success(`Welcome back ${payload.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default userSlice.reducer;
