import styles from './content.styl';
import samples from './code-samples';
import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Content extends Component {
  render() {
    return (
        <div styleName="content">
            <div styleName="paragraph">
              <div styleName="title">What, why and how?</div>
              <h3>
In this example we explore CSS Modules and build a component using Webpack,
 React and Stylus. This is not a tutorial, more like a walkthrough and requires
 some experience with this technologies and desire to dig into&nbsp;
             <a href="https://github.com/olegakbarov/react-cssmodules-demo">
               source code
             </a>.
              </h3>
              <h3>
Notice: if you look right — you'll probably find a usercard. The look of it
more or less corresponds with the code provided below. Also it should
entertain you.
              </h3>
              <p>
  CSS Modules provide a local scope for your selectors preventing possible
nameclashes. So instead of using cloumsy BEM and going creative with names of
classes you can write simple CSS and not be scared to mess things up. The
implementetion of this is relatively simple: classes get unique hashed name.
              </p>
            </div>
            <pre styleName="code">
              {samples.one}
            </pre>
            <div styleName="paragraph">
              <h1>Setting the Webpack up</h1>
              <p>
To accomplish our goal we need module bundler such as Webpack. Forget about
concatenating of stylesheets by yourself
just <code styleName="code-inline">import</code> CSS for each component
respectively, sit back and enjoy. You know what else is awesome?
You are not tied to raw CSS and can you use whatever preprocessor you
like (i personally enjoy Stylus). Afterall your loader should
look something like this:
              </p>
            </div>
            <pre styleName="code">
              {samples.two}
            </pre>
            <div styleName="paragraph">
              <h1>Componentize all the things</h1>
              <p>
Now you can import styles into JS-file and work with classes throught style
object. Like this:
              </p>
              <pre styleName="code">
                {samples.three}
              </pre>
            </div>
            <div styleName="paragraph">
              <h1>Even more...</h1>
              <p>
But if you want to go further and pass a string as a name of
class and be warned about possible mistakes, you should take a look onto package
called <code styleName="code-inline">react-css-modules</code> which
 takes care about it all. Just install it and wrap your component in decorator
 (which adds <code styleName="code-inline">styleName</code> keyword
to <code styleName="code-inline">render()</code> method) and write
your modular CSS within React almost as if you'd write your regular CSS.
              </p>
            </div>
            <pre styleName="code">
              {samples.four}
            </pre>
            <h1>That's it</h1>
            <p>
Now when you have the idea of how CSS Modules work, go try it by yourself or
fork me on the GitHubs!
            </p>
            <a href="https://github.com/olegakbarov/react-cssmodules-demo">
              <div styleName="octocat"></div>
            </a>
        </div>
    );
  }
}
