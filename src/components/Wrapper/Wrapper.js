import styles from './wrapper.styl';

import React, { Component } from 'react';
import Content from '../Content/Content';

export default class Wrapper extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.wrapper}>
          <Content />
        </div>
      </div>
    );
  }
}
