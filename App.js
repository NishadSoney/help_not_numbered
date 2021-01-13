import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/loginScreen';

export default class App extends React.Component {
  render(){
    return(
      <LoginScreen/>
    );
  }
}