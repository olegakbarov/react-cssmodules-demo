import React, { Component } from 'react';
import styles from './header.styl';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Header extends Component {
  render() {
    return (
      <div styleName="header">
        <div styleName="wrapper">
          <div styleName="title">
            Build your first component with
          </div>
          <div styleName="container">
            <div
              styleName="block-text">
              CSS Modules
            </div>
          </div>
        </div>
      </div>
    );
  }
}
