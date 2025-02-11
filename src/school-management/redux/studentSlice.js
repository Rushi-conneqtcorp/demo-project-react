import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: []
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    }
  },
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
