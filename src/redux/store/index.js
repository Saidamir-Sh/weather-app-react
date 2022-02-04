import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { locationReducer } from "../reducer";

export const initialState = {
    location : []
}

const persistConfig = {
    key: "root",
    storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, locationReducer)

const configureStore = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

const persistor = persistStore(configureStore)

export { configureStore, persistor}