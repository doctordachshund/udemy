import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCJmE4RqO18Z7rGzAmn9lrMrmHEAag1N1M",
      authDomain: "manager-b21f2.firebaseapp.com",
      databaseURL: "https://manager-b21f2.firebaseio.com",
      projectId: "manager-b21f2",
      storageBucket: "",
      messagingSenderId: "522614168679"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
