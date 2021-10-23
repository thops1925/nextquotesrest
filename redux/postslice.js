import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await fetch('http://localhost:4000/posts');
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

export const addApi = createAsyncThunk('todos/addApi', async (payload) => {
  const response = await fetch('http://localhost:4000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      creator: payload.creator,
      title: payload.title,
      message: payload.message,
      tags: payload.tags,
      selectedFile: payload.selectedFile,
    }),
  });
  if (response.ok) {
    const todo = await response.json();
    return { todo };
  }
});

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
      return action.payload.todos;
    },
    [addApi.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
  },
});

export const { postItem, deleteTodo } = post.actions;
export default post.reducer;
