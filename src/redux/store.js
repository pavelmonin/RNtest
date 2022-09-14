import { configureStore} from '@reduxjs/toolkit'
import usersReducer from './usersSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { jsonPlaceholderApi } from './apiSlice'


const store = configureStore({
    reducer: {
        users:usersReducer,
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
  }
  
  )


setupListeners(store.dispatch)

export default store