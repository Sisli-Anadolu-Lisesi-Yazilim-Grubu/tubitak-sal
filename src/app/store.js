import { createStore } from 'redux';

const store = (p) => {
    const initialState = {
        projects: p
    };

    const reducer = (state = initialState, action) => {
        return state;
    };
    
    return createStore(reducer);
};

export default store;