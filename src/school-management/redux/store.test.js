import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';
import teacherReducer from './teacherSlice';
import subjectReducer from './subjectSlice';

// Import the store if defined in a separate file
import store from './store'; // Only if store is exported

describe('Redux Store Configuration', () => {
  test('should create a store with correct reducers', () => {
    const testStore = configureStore({
      reducer: {
        students: studentReducer,
        teachers: teacherReducer,
        subjects: subjectReducer,
      },
    });

    // Check if the store has expected keys
    const state = testStore.getState();
    expect(state).toHaveProperty('students');
    expect(state).toHaveProperty('teachers');
    expect(state).toHaveProperty('subjects');
  });

  test('should match initial states of reducers', () => {
    const testStore = configureStore({
      reducer: {
        students: studentReducer,
        teachers: teacherReducer,
        subjects: subjectReducer,
      },
    });

    // Compare initial states
    expect(testStore.getState().students).toEqual(studentReducer(undefined, { type: '@@INIT' }));
    expect(testStore.getState().teachers).toEqual(teacherReducer(undefined, { type: '@@INIT' }));
    expect(testStore.getState().subjects).toEqual(subjectReducer(undefined, { type: '@@INIT' }));
  });

  test('should match the exported store instance', () => {
    // Ensure the exported store instance has the correct shape
    const state = store.getState();
    expect(state).toHaveProperty('students');
    expect(state).toHaveProperty('teachers');
    expect(state).toHaveProperty('subjects');
  });
});
