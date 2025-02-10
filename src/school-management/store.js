import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './redux/studentSlice';
import teacherReducer from './redux/teacherSlice';
import subjectReducer from './redux/subjectSlice';

const store = configureStore({
  reducer: {
    students: studentReducer,
    teachers: teacherReducer,
    subjects: subjectReducer
  },
});

export default store;
