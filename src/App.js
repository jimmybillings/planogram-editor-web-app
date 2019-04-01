import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';
import styled from 'styled-components';
import InboxScreen from './components/InboxScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  }
}

export default App;