// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assurez-vous de fournir le bon chemin vers votre fichier rootReducer
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
