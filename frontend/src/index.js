import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import authReducer from "./auth/store/reducers/auth";
import mEditorReducer from "./materialEditor/store/reducers/materialEditorReducer";
import layoutReducer from "./common/store/reducers/layoutReducer";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  mEditor: mEditorReducer,
  layout: layoutReducer,
});
const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
