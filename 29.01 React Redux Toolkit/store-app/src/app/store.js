import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import colorChangeReducer from '../features/theme/themeSlice'


export const store = configureStore({
  reducer: {

    counter: counterReducer,
    theme: colorChangeReducer

  },
})