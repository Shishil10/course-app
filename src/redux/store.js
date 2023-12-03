// store.js
import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadInitialData } from './actions';
import courseModel from '../database/courseModel';

// Create an initial state with students and courses
const students = courseModel.map(c => c.students)
                              .flat();

const initialState = {
   students,
   courses: courseModel
}

// Initialize the store with the rootReducer and initialState
const store = createStore(rootReducer, initialState);
store.dispatch(loadInitialData(initialState));

export default store;
