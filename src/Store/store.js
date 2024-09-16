import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { reducer } from "./Reducers/WorkWithProfiles";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware())
);

const persistor = persistStore(store);

export { store, persistor };
