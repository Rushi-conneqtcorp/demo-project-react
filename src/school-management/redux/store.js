import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';
import teacherReducer from './teacherSlice';
import subjectReducer from './subjectSlice';

const store = configureStore({
  reducer: {
    students: studentReducer,
    teachers: teacherReducer,
    subjects: subjectReducer
  },
});

export default store;
