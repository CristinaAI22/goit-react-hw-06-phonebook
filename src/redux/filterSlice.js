const { createSlice } = require('@reduxjs/toolkit');

const filterInitialState = {
  textFilter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeTextFilter(state, action) {
      state.textFilter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeTextFilter } = filterSlice.actions;
