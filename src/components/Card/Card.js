/* global window */
import styles from './card.styl';

import React, { Component } from 'react';
import Button from './Button';
import Userpick from './Userpick';
import Sticky from 'react-sticky';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Card extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  state = {
    userpick: {}
  }
  handleScroll = () => {
    console.log(window.document.body.scrollTop);
    if (window.document.body.scrollTop > 500) {
      this.setState({
        card: {
          opacity: 1
        }
      });
    }
    if (window.document.body.scrollTop > 800) {
      this.setState({
        userpick: {
          opacity: 1
        }
      });
    }
    if (window.document.body.scrollTop > 1100) {
      this.setState({
        username: {
          opacity: 1
        }
      });
    }
    if (window.document.body.scrollTop > 1400) {
      this.setState({
        about: {
          opacity: 1
        }
      });
    }
    if (window.document.body.scrollTop > 1600) {
      this.setState({
        button: {
          opacity: 1
        }
      });
    }
  }
  render() {
    const stickyStyle = {
      position: 'fixed',
      top: 30,
      right: 177
    };
    return (
      <Sticky topOffset={-30} stickyStyle={stickyStyle}>
        <div style={this.state.card} styleName="card">
          <Userpick userpickStyle={this.state.userpick} />
          <div style={this.state.username} styleName="username">
            Taylor Swift
          </div>
          <div style={this.state.about} styleName="about">
            Taylor Alison Swift is an American
            singer-songwriter and actress. Raised in Wyomissing.
          </div>
          <Button buttonStyle={this.state.button} />
        </div>
      </Sticky>
    );
  }
}
