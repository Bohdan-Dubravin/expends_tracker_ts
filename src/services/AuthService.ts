import { AuthFormValues } from '@/types/authInput';
import { UserDataType } from '@/types/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (build) => ({
    register: build.mutation<UserDataType, AuthFormValues>({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});
export const { useRegisterMutation } = authApi;
