import styles from './wrapper.styl';

import React, { Component } from 'react';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Wrapper extends Component {
  render() {
    return (
      <div styleName="page">
        <div styleName="wrapper">
          <Content />
          <Sidebar />
        </div>
      </div>
    );
  }
}
