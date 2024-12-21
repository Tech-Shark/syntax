import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UserState, UserUpdateProfilePayload } from "./userTypes";

const initialState: UserState = {
  credit: 0,
  id: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_UPDATE_PROFILE: (
      state,
      action: PayloadAction<UserUpdateProfilePayload>
    ) => {
      console.log(action);
      state = {
        ...state,
        id: action.payload.id,
        credit: action.payload.credit,
      };
    },
  },
});

export default userSlice.reducer;
export const { USER_UPDATE_PROFILE } = userSlice.actions;
