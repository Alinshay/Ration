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
import PersonalAccount from "./components/PersonalAccount";
import Main from "./components/Main";
import Challenge from "./components/Challenge";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

function App() {
  return (
          <Provider store={store}>
              <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={PersonalAccount} />
                    <Route exact path="/profileInfoChange" component={PersonalInfoChange} />
                      <Route exact path="/main" component={Main} />
                      <Route exact path="/challenge" component={Challenge} />
                      <Route exact path="/nav" component={Navbar} />
                      <Route exact path="/calculator" component={Calculator} />
                  </Switch>
              </BrowserRouter>
         </Provider>

  );
}

export default App;
