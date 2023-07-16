import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    nickname: '',
    uid: '',
    accessToken: ''
  },
  reducers: {
    loginUser: (state, action) => {
        state.nickname = action.payload.nickname;
        state.accessToken = action.payload.token;
        state.uid = action.payload.userId;
    },
    clearUser: state => {
      state.displayName = '';
      state.uid = '';
      state.accessToken = '';
    }
  }
});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
