import { configureStore } from '@reduxjs/toolkit';

import Global from './reducers/Global';
import News  from './reducers/News';

const store = configureStore({
  reducer: {
    Global,
    News
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
