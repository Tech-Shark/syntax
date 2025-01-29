import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { UserState, UserUpdateProfilePayload } from "./userTypes";

const initialState: UserState = {
  profile: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    // USER_ADD: (state, action: PayloadAction<UserAddPayload>) => {
    //   const { profile } = action.payload;

    //   // Set the user profile when a new user is added
    //   state.profile = profile;
    // },

    USER_UPDATE_PROFILE: (
      state,
      action: PayloadAction<UserUpdateProfilePayload>
    ) => {
      const { profile } = action.payload;

      state.profile = {
        ...state.profile,
        id: action.payload?.profile?.id || state.profile?.id,
        cv_last_checked:
          action.payload?.profile?.cv_last_checked ||
          state.profile?.cv_last_checked,
        amount_of_credits: profile?.amount_of_credits
          ? (Number(profile.amount_of_credits) as unknown as bigint)
          : (Number(
              state.profile?.amount_of_credits || 0
            ) as unknown as bigint),

        other: action.payload?.profile?.other || state.profile?.other,
      };
    },
  },
});

export default userSlice.reducer;
export const { USER_UPDATE_PROFILE } = userSlice.actions;
