import React, { Component } from 'react';
import styles from './header.styl';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Header extends Component {
  render() {
    const gitHubButton = '<a class="github-button" href="https://github.com/olegakbarov/react-cssmodules-demo" data-icon="octicon-star" data-style="mega" data-count-href="/olegakbarov/react-cssmodules-demo/stargazers" data-count-api="/repos/olegakbarov/react-cssmodules-demo#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star olegakbarov/react-cssmodules-demo on GitHub"></a>'  //eslint-disable-line
    const followButton = '<a class="github-button" href="https://github.com/olegakbarov" data-style="mega" data-count-href="/olegakbarov/followers" data-count-api="/users/olegakbarov#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @olegakbarov on GitHub"></a>' //eslint-disable-line
    const forkButton = '<a class="github-button" href="https://github.com/olegakbarov/react-cssmodules-demo/fork" data-icon="octicon-repo-forked" data-style="mega" data-count-href="/olegakbarov/react-cssmodules-demo/network" data-count-api="/repos/olegakbarov/react-cssmodules-demo#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork olegakbarov/react-cssmodules-demo on GitHub"></a>' //eslint-disable-line
    const style = { paddingRight: '20px' };
    return (
      <div styleName="header">
        <div styleName="wrapper">
          <div style={{ paddingTop: '30px' }}>
            <span
              style={style}
              dangerouslySetInnerHTML={{ __html: gitHubButton }}
            />
            <span
              style={style}
              dangerouslySetInnerHTML={{ __html: followButton }}
            />
            <span
              style={style}
              dangerouslySetInnerHTML={{ __html: forkButton }}
            />
          </div>
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
