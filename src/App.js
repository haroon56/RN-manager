import React, { Component } from 'react';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
// import { View } from 'react-native';
import reducers from './reducers';
import Router from './Router';
// import LoginForm from './components/LoginForm';

class App extends Component { //calling firebase from component did mount
//calling firebase from component did mount  
componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyDfV2fQAuIcEedBvN5P6Q2lWptPVMuVNZY',
    authDomain: 'rn-manager-f8ff6.firebaseapp.com',
    databaseURL: 'https://rn-manager-f8ff6.firebaseio.com',
    projectId: 'rn-manager-f8ff6',
    storageBucket: 'rn-manager-f8ff6.appspot.com',
    messagingSenderId: '413254475683'
  });
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
