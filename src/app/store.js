import { configureStore } from "@reduxjs/toolkit";
import InputReducer from '../features/InputSlice'
import React from 'react'

export const store = configureStore({
    reducer :{
        input : InputReducer,
    }
})


