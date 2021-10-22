import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const response = await fetch('http://localhost:4000/posts');
  if (response.ok) {
    const todos = await response.json();
    return { todos };
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
  },
});

export const { postItem, deleteTodo } = post.actions;
export default post.reducer;
