import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // value: 0,
  selectedUserId:1,
  entities: [{"id": 1,"name": "Leanne Graham (test)"},{"id": 2,"name": "Ervin Howell (test)"},{"id": 3,"name": "Clementine Bauch (test)"}],

  todos:[{"userId": 1,"id": 1,"title": "delectus aut autem (test)","completed": true},
  {"userId": 1,"id": 2,"title": "quis ut nam facilis et officia qui (test)","completed": false }],

  posts:[ {"userId": 1,"id": 1,"title": "test", "body": "test"},
  {"userId": 2,"id": 2,"title": "test2", "body": "test2"}
]
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    selectUser: (state, action) => {
      state.selectedUserId = action.payload
    },
    loadUsers: (state, action) => {
      return{
        ...state,
        entities:[...action.payload]
      }
    },
    loadPosts: (state, action) => {
      return{
        ...state,
        posts:[...action.payload]
      }
    },
    loadTodos: (state, action) => {
      return{
        ...state,
        todos:[...action.payload]
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,selectUser,loadUsers,loadPosts,loadTodos } = usersSlice.actions

export default usersSlice.reducer


//Create a Redux State Slice
//Creating a slice requires a string name to identify the slice, an initial state value, 
//and one or more reducer functions to define how the state can be updated. 
//Once a slice is created, we can export the generated Redux action creators and the reducer function
// for the whole slice.