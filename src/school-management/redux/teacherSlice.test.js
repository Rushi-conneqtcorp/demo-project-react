import teacherReducer, { addTeacher } from './teacherSlice';

describe('Teacher Slice - addTeacher Reducer', () => {
  const initialState = { teachers: [] };

  test('should return the initial state', () => {
    expect(teacherReducer(undefined, {})).toEqual(initialState);
  });

  test('should add a teacher to the store', () => {
    const newTeacher = { id: 1, fullname: 'John Doe', email: 'demo@gmail.com', phone: '9156020302', password: 'test'};

    const nextState = teacherReducer(initialState, addTeacher(newTeacher));

    expect(nextState.teachers).toHaveLength(1);
    expect(nextState.teachers[0]).toEqual(newTeacher);
  });

  test('should add multiple teachers to the store', () => {
    const teacher1 = { id: 1, name: 'Alice', email: 'demo@gmail.com', phone: '9156020302', password: 'test' };
    const teacher2 = { id: 2, name: 'Bob', email: 'demo1@gmail.com', phone: '9156020302', password: 'demo' };

    let state = teacherReducer(initialState, addTeacher(teacher1));
    state = teacherReducer(state, addTeacher(teacher2));

    expect(state.teachers).toHaveLength(2);
    expect(state.teachers).toEqual([teacher1, teacher2]);
  });
});
