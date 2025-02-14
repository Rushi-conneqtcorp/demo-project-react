import studentReducer, { addStudent } from './studentSlice';

describe('Student Slice - addStudent Reducer', () => {
  const initialState = { students: [] };

  test('should return the initial state', () => {
    expect(studentReducer(undefined, {})).toEqual(initialState);
  });

  test('should add a student to the store', () => {
    const newStudent = { id: 1, fullname: 'John Doe', email: 'demo@gmail.com', phone: '9156020302', password: 'test'};

    const nextState = studentReducer(initialState, addStudent(newStudent));

    expect(nextState.students).toHaveLength(1);
    expect(nextState.students[0]).toEqual(newStudent);
  });

  test('should add multiple students to the store', () => {
    const student1 = { id: 1, name: 'Alice', email: 'demo@gmail.com', phone: '9156020302', password: 'test' };
    const student2 = { id: 2, name: 'Bob', email: 'demo1@gmail.com', phone: '9156020302', password: 'demo' };

    let state = studentReducer(initialState, addStudent(student1));
    state = studentReducer(state, addStudent(student2));

    expect(state.students).toHaveLength(2);
    expect(state.students).toEqual([student1, student2]);
  });
});
