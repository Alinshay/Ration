import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.jsx';
import rootReducer from "./reducers/Reducers.js";
import PersonalInfoChange from "./components/PersonalInfoChange";
import PersonalInfo from "./components/PersonalInfo";


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

function App() {
  return (
          <Provider store={store}>
              <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profileInfoChange" component={PersonalInfoChange} />
                    <Route exact path="/profileInfo" component={PersonalInfo} />
                  </Switch>
              </BrowserRouter>
         </Provider>

  );
}

export default App;
