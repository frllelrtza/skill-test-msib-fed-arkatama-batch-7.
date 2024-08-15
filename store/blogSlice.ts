// store/blogSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlog = createAsyncThunk('blog/fetchBlog', async () => {
  const response = await axios.get('https://pmb.alkautsar.ponpes.id/api/cms/blog');
  return response.data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    data: [],
    status: 'loading' as 'loading' | 'succeeded' | 'failed' | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchBlog.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default blogSlice.reducer;
