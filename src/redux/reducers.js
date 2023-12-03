const initialState = {
    // Initial state of the Redux store
    students: [],
    courses: [],
};

//reducer function that manages state updates based on actions
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_INITIAL_DATA':
            // Return a new state object with the existing state and the loaded data
            return {
                ...state,
                ...action.payload,
            };

        

        default:
            return state;
    }
};

export default rootReducer;
