import { configureStore } from "@reduxjs/toolkit";

import list from "./list";

const store = configureStore({
  reducer: { itemList: list },
});

export default store;
