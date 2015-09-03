/* global window */
import React, { Component } from 'react';
import styles from './header.styl';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  state = {
    container: {}
  }
  handleScroll = () => {
    let scroll = window.document.body.scrollTop;
    if (scroll > 50) {
      this.setState({
        container: {
          border: '3px solid white',
          width: 206,
          height: 206
        },
        text: {
          opacity: 1
        }
      });
    }
  }
  render() {
    return (
      <div styleName="header">
        <div styleName="wrapper">
          <div styleName="title">
            Build your first component with
          </div>
          <div style={this.state.container} styleName="container">
            <div
              style={this.state.text}
              styleName="block-text">
              CSS Modules
            </div>
          </div>
        </div>
      </div>
    );
  }
}
