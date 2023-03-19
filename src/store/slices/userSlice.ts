import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { UserDataType } from '@/types/user';

const initialState: UserDataType = {
  id: '',
  accessToken: '',
  refreshToken: '',
  displayedName: null,
  email: '',
  avatarUrl: null,
  currencyFormat: 'US Dollar $',
  TotalMonthBudget: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<UserDataType>) => {
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      state = { ...action.payload };
    },
  },
});

export const { authenticate } = userSlice.actions;

export default userSlice.reducer;
