import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'



export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholderApi',


    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getPostsByUserId: builder.query({
            query: (userId) => `posts/?userId=${userId}`,
        }),
        getTodosByUserId: builder.query({
            query: (userId) => `todos/?userId=${userId}`,
        }),
        getUsers: builder.query({
            query: () => `users`,
        }),
    }),

})

export const {useGetTodosByUserIdQuery,useGetPostsByUserIdQuery,useGetUsersQuery} = jsonPlaceholderApi
