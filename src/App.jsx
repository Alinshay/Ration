import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import rootReducer from "./reducers/Reducers.js";



const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

function App() {
  return (
          <Provider store={store}>
              <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Home} />
                  </Switch>
              </BrowserRouter>
         </Provider>

  );
}

export default App;
