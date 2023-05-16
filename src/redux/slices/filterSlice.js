import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: { name: 'Top rated', sortType: '-rating' },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
      state.currentPage = 1;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
      state.currentPage = 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setPage } = filterSlice.actions;

export default filterSlice.reducer;
