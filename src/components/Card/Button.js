import React, { Component } from 'react';
import styles from './card.styl';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Button extends Component {
  render() {
    return (
      <div style={this.props.buttonStyle} styleName="button">
        Button
      </div>
    );
  }
}
