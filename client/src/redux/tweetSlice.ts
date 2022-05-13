import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { variables } from '../variables';
import axios from 'axios';

interface ITweetObject {
  content: string;
  _id: string;
  createdAt: string; // ISO String
  userId: {
    profilePic: string;
    firstName: string;
    lastName: string;
  };
}

// Tweets Interface
interface ITweets {
  tweets: ITweetObject[];
  loading: boolean;
}

// Tweets
const initialState: ITweets = {
  tweets: [],
  loading: false,
};

// Get user ( owner ) profile
export const fetchTweets = createAsyncThunk('tweets/all', async () => {
  const response = await axios(variables.origin + '/api/tweet/all', {
    withCredentials: true,
  });
  return response;
});

export const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    addTweet: (state, action: PayloadAction<ITweetObject>) => {
      state.tweets.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTweets.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTweets.fulfilled, (state, action) => {
      state.loading = false;
      state.tweets = action.payload.data;
    });
    builder.addCase(fetchTweets.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default tweetSlice.reducer;
export const { addTweet } = tweetSlice.actions;
