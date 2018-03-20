import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCzs3f0wiA0YdXehwWkSUHcU4IZEkWpOBk",
      authDomain: "manager-e18b3.firebaseapp.com",
      databaseURL: "https://manager-e18b3.firebaseio.com",
      projectId: "manager-e18b3",
      storageBucket: "",
      messagingSenderId: "880910688384"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider >

    )
  }
};

export default App;