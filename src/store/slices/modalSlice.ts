import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Define a type for the slice state
interface ModalState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpen } = modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isOpen = (state: RootState) => state.modal.isOpen;

export default modalSlice.reducer;
