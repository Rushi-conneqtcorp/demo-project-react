import subjectReducer, { addSubject } from './subjectSlice';

describe('Subject Slice - addSubject Reducer', () => {
  const initialState = { subjects: [] };

  test('should return the initial state', () => {
    expect(subjectReducer(undefined, {})).toEqual(initialState);
  });

  test('should add a student to the store', () => {
    const newSubject = { id: 1, subjectName: 'English', description: 'test the subject' };

    const nextState = subjectReducer(initialState, addSubject(newSubject));

    expect(nextState.subjects).toHaveLength(1);
    expect(nextState.subjects[0]).toEqual(newSubject);
  });

  test('should add multiple subjects to the store', () => {
    const subject1 = { id: 1, subjectName: 'English', description: 'test the subject' };
    const subject2 = { id: 2, subjectName: 'Hindi', description: 'testing the subject' };

    let state = subjectReducer(initialState, addSubject(subject1));
    state = subjectReducer(state, addSubject(subject2));

    expect(state.subjects).toHaveLength(2);
    expect(state.subjects).toEqual([subject1, subject2]);
  });
});
