import React, { Component } from 'react';
import styles from './sidebar.styl';
import CSSModules from 'react-css-modules';
import Card from '../Card/Card';

@CSSModules(styles)
export default class Sidebar extends Component {
  render() {
    return (
      <div styleName="sidebar">
        <Card />
      </div>
    );
  }
}
