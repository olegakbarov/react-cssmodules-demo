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
    topLeft: {},
    topRight: {},
    bottomLeft: {},
    bottomRight: {},
    container: {}
  }
  handleScroll = () => {
    let scroll = window.document.body.scrollTop;
    if (scroll > 70 && scroll < 100) {
      this.setState({
        topLeft: {
          opacity: '0',
          top: 0,
          left: 0,
          transform: 'rotate(0deg)'
        },
        topRight: {
          opacity: '0',
          top: 0,
          right: 0,
          transform: 'rotate(0deg)'
        },
        bottomLeft: {
          opacity: '0',
          bottom: 0,
          left: 0,
          transform: 'rotate(0deg)'
        },
        bottomRight: {
          opacity: '0',
          bottom: 0,
          right: 0,
          transform: 'rotate(0deg)'
        }
      });
    }
    if (scroll > 150) {
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
              style={this.state.topLeft}
              styleName="block-top-left">
            </div>
            <div
              style={this.state.topRight}
              styleName="block-top-right">
            </div>
            <div
              style={this.state.bottomLeft}
              styleName="block-bottom-left">
            </div>
            <div
              style={this.state.bottomRight}
              styleName="block-bottom-right">
            </div>
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
