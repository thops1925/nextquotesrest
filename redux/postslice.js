import { createSlice } from '@reduxjs/toolkit';

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
      };
      state.push(newValue);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { postItem, deleteTodo } = post.actions;
export default post.reducer;
