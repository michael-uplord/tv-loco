import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: [],
  loading: false,
  error: null,
  id: null,
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    showStart(state) {
      state.loading = true;
      state.error = null;
    },
    showSuccess(state, action) {
      state.loading = false;
      state.shows = action.payload;
    },
    showFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchShow = (id = null) => async (dispatch) => {
  dispatch(showSlice.actions.setQuery(query));
  dispatch(showSlice.actions.showsStart());

  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    await new Promise(resolve => setTimeout(resolve, 600));
    dispatch(showSlice.actions.showsSuccess(result));
  } catch (error) {
    dispatch(showSlice.actions.showsFailure(error.message));
  }
};

export const { showStart, showSuccess, showFailure } = showSlice.actions;
export default showSlice.reducer;