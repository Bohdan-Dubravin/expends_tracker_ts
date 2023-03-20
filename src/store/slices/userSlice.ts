import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { UserDataType } from "@/types/user";

interface IUserState {
  user: UserDataType;
}

const initialState: IUserState = {
  user: {
    id: "",
    accessToken: "",
    refreshToken: "",
    displayedName: null,
    email: "",
    avatarUrl: null,
    currencyFormat: "US Dollar $",
    TotalMonthBudget: 0,
  },
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<UserDataType>) => {
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { authenticate } = userSlice.actions;

export default userSlice.reducer;
