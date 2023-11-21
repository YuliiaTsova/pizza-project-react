import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'loading', //loading, success, error
};

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async ({ categoryId, sortType, currentPage }) => {
    const category = categoryId === 0 ? '' : `&category=${categoryId}`;
    const sort = `&sortBy=${sortType.replace('-', '')}&order=${
      sortType.includes('-') ? 'desc' : 'asc'
    }`;
    const page = `page=${currentPage}&limit=8`;

    const res = await axios.get(
      'https://64525b25a2860c9ed409bbf0.mockapi.io/pizzas?' + page + category + sort
    );

    return res.data;
  }
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state, action) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.status = 'success';
  //     state.items = action.payload;
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     state.status = action.error.message;
  //     state.items = [];
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = action.error.message;
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
