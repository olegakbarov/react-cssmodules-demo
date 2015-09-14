# What, why and how?

In this example we explore CSS Modules and build a component using Webpack, React and Stylus. This is not a tutorial, more like a walkthrough and requires some experience with this technologies and desire to dig into [source code](https:github.com/olegakbarov/react-cssmodules-demo)

Notice: if you look right — you'll probably find a usercard. The look of it more or less corresponds with the code provided below. Also it should entertain you. CSS Modules provide a local scope for your selectors preventing possible nameclashes. So instead of using cloumsy BEM and going creative with names of classes you can write simple CSS and not be scared to mess things up. The implementetion of this is relatively simple: classes get unique hashed name.

 ```js
 '...[name]__[local]___[hash:base64:5]...'
 ```

## Setting the Webpack up

 To accomplish our goal we need module bundler such as Webpack. Forget about concatenating of stylesheets by yourself just `import` CSS for each component respectively, sit back and enjoy. You know what else is awesome? You are not tied to raw CSS and can you use whatever preprocessor you like (i personally enjoy Stylus). Afterall your loader should look something like this:

 ```js
 {
   test: /\.styl$/,
   loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!stylus-loader')"
 }
 ```

## Componentize all the things

 Now you can import styles into JS-file and work with classes throught style
 object. Like this:

```js
import styles from './card.styl';

export default class Card extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.userpic}>
        </div>
      </div>
    );
  }
}
```

## Even more...

But if you want to go further and pass a string as a name of class and be warned about possible mistakes, you should take a look onto package called `react-css-modules` which takes care about it all. Just install it and wrap your component in decorator (which adds `styleName` keyword to `render()` method) and write your modular CSS within React almost as if you'd write your regular CSS.

```js
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Content extends Component {
  ...
  render() {
    return (
      <div styleName="card">
        <div styleName="userpic"></div>
        <div styleName="username">Taylor Swift</div>
        <div styleName="button">Button</div>
      </div>
    );
  }
}
```
## That's it

Now when you have the idea of how CSS Modules work, go try it by yourself or fork me on the GitHubs!
