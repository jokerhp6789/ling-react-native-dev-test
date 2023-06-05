import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import { createLogger } from 'redux-logger';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from "@react-native-community/async-storage";
import rootReducer from "./root-reducer";

const persistConfig = {
    key: "lotusSaleOrder",
    // storage: AsyncStorage,d
    whitelist: ["user", "metadata"],
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// Load middleware
const middleware = [];

const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...middleware))
);

// persistStore(store);

export default store;
