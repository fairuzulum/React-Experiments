// store
// reducer  
// dispatch/action
// subription

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counterSlice'

export const store = configureStore({
    reducer: {
        // daftar semua state disini
        counter: counterReducer
    }
})