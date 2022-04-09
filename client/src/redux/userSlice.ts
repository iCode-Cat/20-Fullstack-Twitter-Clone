import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { variables } from '../variables';

export interface UserState {
  isAuth: boolean | null;
  username: string;
  profile: any;
}

const initialState: UserState = {
  isAuth: null,
  username: '',
  profile: {},
};

// First, create the thunk
export const fetchUserStatus = createAsyncThunk(
  'users/fetchUserStatus',
  async () => {
    const response = await axios(variables.origin + '/api/auth/is_auth', {
      withCredentials: true,
    });
    return response;
  }
);

// Get user profile
export const fetchProfile = createAsyncThunk('users/fetchProfile', async () => {
  const response = await axios(variables.origin + '/api/auth/profile', {
    withCredentials: true,
  });
  return response;
});

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    checkUserAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserStatus.fulfilled, (state, action) => {
      // When user is authenticated
      if (action.payload.status === 200) {
        state.isAuth = true;
        state.username = action.payload?.data?.msg?.username;
        return;
      }
    });
    builder.addCase(fetchUserStatus.rejected, (state, action) => {
      state.isAuth = false;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload?.data;
    });
  },
});

// Action creators are generated for each case reducer function
export const { checkUserAuthenticated } = userSlice.actions;

export default userSlice.reducer;
