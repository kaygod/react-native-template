import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Toast, Modal } from '@ant-design/react-native';
import React from 'react';
import { Text } from 'react-native';
// const storeData = store.getState()
export const counterSlice = createSlice({
  name: 'Global',
  initialState: {
    navigation: {},
    ContrastList: [],
    isAddCompare:false
  },
  reducers: {
    //更该标签
    getNav(state, action) {
      state.navigation = action.payload;
    },
    setContrastList(state, action) {
      state.ContrastList = action.payload
    },
    setAddCompare(state, action) {
      state.isAddCompare = action.payload
    },
    noOperate(state) {
      return state;
    },
  },
});

export const getter = (state: any) => {
  return state.Global;
};

export const { getNav, noOperate, setContrastList,setAddCompare } = counterSlice.actions;




export default counterSlice.reducer;
