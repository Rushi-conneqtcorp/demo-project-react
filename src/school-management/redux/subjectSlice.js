import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subjects: []
};

const subjectSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    addSubject: (state, action) => {
      state.subjects.push(action.payload);
    }
  },
});

export const { addSubject } = subjectSlice.actions;
export default subjectSlice.reducer;
