import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import authReducer from '~/redux/auth/authSlice'
import matterReducer from '~/redux/matter/matterSlice' 
import timeEntrySlice from './time-entry/timeEntrySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    matter: matterReducer,
    timeEntry: timeEntrySlice
  }
})

const makeStore = () => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(makeStore)
