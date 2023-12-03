    //load initial data into the Redux store
    export const loadInitialData = ({ students, courses }) => ({
        type: 'LOAD_INITIAL_DATA',
        payload: { students, courses },
      });

      
    
    