import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('jmadata')) ?JSON.parse(localStorage.getItem('jmadata')): null,
  },
  reducers: {
    datastore: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { datastore } = counterSlice.actions

export default counterSlice.reducer