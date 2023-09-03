import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query({
      query: () => `${USERS_URL}/profile`,
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: user,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useLogoutUserMutation,
} = userApiSlice;
