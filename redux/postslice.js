import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await axios.get('http://localhost:4000/posts');
  return response?.data;
});

export const addApi = createAsyncThunk('todos/addApi', async (payload) => {
  const response = await axios.post('http://localhost:4000/posts', {
    creator: payload.creator,
    title: payload.title,
    message: payload.message,
    tags: payload.tags,
    selectedFile: payload.selectedFile,
  });
  return response?.data;
});

export const deleteTodos = createAsyncThunk(
  'todos/deleteTodos',
  async (payload) => {
    const resp = await axios.delete(
      `http://localhost:4000/posts/${payload.id}`,
    );
    return resp?.data;
  },
);

const post = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    postItem: (state, action) => {
      const newValue = {
        id: Date.now(),
        creator: action.payload.creator,
        title: action.payload.title,
        message: action.payload.message,
        tags: action.payload.tags,
        selectedFile: action.payload.selectedFile,
      };
      state.push(newValue);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
      return action.payload;
    },
    [addApi.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [deleteTodos.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { postItem, deleteTodo } = post.actions;
export default post.reducer;
