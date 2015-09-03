const samples = {
  one: `'...[name]__[local]___[hash:base64:5]...'`,

  two: `{
    test: /\.styl$/,
    loader: ExtractTextPlugin.extract('style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!stylus-loader')"
  }`,

  three: `
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
  }`,

  four: `import CSSModules from 'react-css-modules';

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
  }`
};

export default samples;
