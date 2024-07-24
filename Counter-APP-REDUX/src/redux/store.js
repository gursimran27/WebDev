// centeralized storgae

import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice' //default import from that directory beacuse {} is not used

export const store=  configureStore({
  reducer: {
    counter: CounterSlice,
  }
})