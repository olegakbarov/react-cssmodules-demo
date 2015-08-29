import 'normalize.css';

import React, { Component } from 'react';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wrapper />
      </div>
    );
  }
}
