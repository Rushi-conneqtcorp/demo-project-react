import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teachers: []
};

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    }
  },
});

export const { addTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;
