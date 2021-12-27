1. create-react-app redux-with-toolkit
2. npm install @reduxjs/toolkit
3. npm install react-redux
4. create app/store.js
    import { configureStore } from "@reduxjs/toolkit";

    export const store = configureStore({
    reducer:{},
    })
5. index.js
    import {Provider} from 'react-redux'
    import { store } from './app/store';

    <Provider store={store}>
    <App />
    </Provider>
