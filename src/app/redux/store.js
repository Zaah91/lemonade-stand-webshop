import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer, // Check chat if this is a possible solution
});

export default store;

// TODO: Comments and explanations