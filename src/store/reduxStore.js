import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice.js';
//import listingsReducer from '../features/slices/listingsSlice.js';
//import listingsReducer from '../features/slices/listingSlice.js';

const store = configureStore({
    reducer: {
        users: userSlice,
  //      listings: listingsReducer,
    },
});

export default store;