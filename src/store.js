import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slick/counterSlice'

export default configureStore({
  reducer: {
    data:counterSlice
  },
})