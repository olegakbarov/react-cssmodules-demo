import './prism.css';
import './prism.js';
import styles from './content.styl';
import post from './post.md';

import marked from 'marked';

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Content extends Component {
  render() {
    const renderedMarkdown = marked(post);
    return (
      <div styleName="content">
        <span dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
        <a href="https:github.com/olegakbarov/react-cssmodules-demo">
          <div styleName="octocat"></div>
        </a>
      </div>
    );
  }
}
