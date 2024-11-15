import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shows: [],
  loading: false,
  error: null,
  query: null,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    showsStart(state) {
      state.loading = true;
      state.error = null;
    },
    showsSuccess(state, action) {
      state.loading = false;
      state.shows = action.payload;
    },
    showsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchShows = (query = null) => async (dispatch) => {
  dispatch(showsSlice.actions.showsStart());

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    dispatch(showsSlice.actions.showsSuccess(result));
  } catch (error) {
    dispatch(showsSlice.actions.showsFailure(error.message));
  }
};

export const { showsStart, showsSuccess, showsFailure } = showsSlice.actions;
export default showsSlice.reducer;
