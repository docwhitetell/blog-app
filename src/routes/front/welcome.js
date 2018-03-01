import React from 'react';
import { connect } from 'dva';
import { withStyles } from 'material-ui/styles';
// import classnames from 'classnames';
// import ScrollAnim from 'rc-scroll-anim';
// import Hidden from 'material-ui/Hidden';


import Banner from './components/banner';
import Service from './components/service';
import styles from './styles';
// import Button from 'material-ui/Button';
// import GradientProgress from '../../components/progress/gradient'
// import {Icon} from 'antd'
// import TweenOne from 'rc-tween-one';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const { OverPack } = ScrollAnim;

class Welcome extends React.Component {
  componentDidMount() {
    const { app, dispatch } = this.props
    dispatch({
      type: 'front/queryIndex',
    })
    if (app.pageloading) {
      dispatch({ type: 'app/update', payload: { pageloading: false } });
    }
  }

  componentDidUpdate() {
    const { app, dispatch } = this.props
    if (app.pageloading) {
      dispatch({ type: 'app/update', payload: { pageloading: false } });
    }
  }

  render() {
    const { front, classes, dispatch } = this.props
    return (
      <div className={classes.main}>
        <Banner classes={classes} />
        <Service classes={classes} data={front} dispatch={dispatch} />
      </div>
    );
  }

}

Welcome.propTypes = {
};

export default connect(({ app, front }) => ({ app, front }))(withStyles(styles)(Welcome));
