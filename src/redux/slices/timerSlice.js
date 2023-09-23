import {createSlice} from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {detailArray: [], localTimer: null,lapTime:null},
  reducers: {
    getAllDetail: (state, action) => {
      state.detailArray.push(action.payload);
    },
    getLocalTimer: (state, action) => {
      state.localTimer = action.payload;
    },
    getLapTime:(state,action)=>{
      state.laptime = action.payload
    }
  },
});

export const {getAllDetail, getLocalTimer,getLapTime} = timerSlice.actions;
export default timerSlice.reducer;
