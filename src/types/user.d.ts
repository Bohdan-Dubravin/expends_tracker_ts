import { access } from 'fs';
import { string } from 'yup';

export interface UserDataType {
  id: string;
  accessToken: string;
  refreshToken: string;
  avatarUrl: string | null;
  currencyFormat: string | null;
  email: string;
  displayedName: string | null;
  TotalMonthBudget: number | null;
}
