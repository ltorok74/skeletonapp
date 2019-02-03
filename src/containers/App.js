import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import App from "../components/App";
import { app } from "../reducers/app";
import { people }  from '../reducers/people';

const reducers = combineReducers({
  app,
  people,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppContainer;
