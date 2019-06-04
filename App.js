import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/search/Search'
import Navigation from './navigation/Navigation'
import { Provider } from 'react-redux';
import Store from './store/configureStore';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
