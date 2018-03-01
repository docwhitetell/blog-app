import React from 'react';
import { connect } from 'dva';
import { withStyles } from 'material-ui/styles';
import LoginForm from './components/login';

const styles = theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
  },
  page: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
  },
  bgwrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  '@keyframes infiniterotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(359deg)',
    },
  },
  bgleft: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  },
  bgleftTop: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundImage: "url('/assets/leftmenu.png')",
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
  },
  bgleftDown: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundImage: "url('/assets/card2.png')",
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'no-repeat',
  },
  bgmiddle: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundImage: "url('/assets/bgmain.gif')",
    backgroundPosition: 'center center',
    backgroundRepeat: 'repeat',
    /* backgroundSize:'100%',*/
    zIndex: -1,
  },
  bgTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  bgTitleWord: {
    fontSize: '14vh',
    color: '#BDBDBD',
    opacity: 0.1,
    textAlign: 'center',
  },
  bgright: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  },
  bgrightTop: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    transform: 'rotateY(180deg)',
    backgroundImage: "url('/assets/leftmenu.png')",
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
  },
  bgrightDown: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundImage: "url('/assets/card2.png')",
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'no-repeat',
    transform: 'rotateY(180deg)',
    backgroundAttachment: 'fixed',
  },

  userAction: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%,0)',
    width: '200px',
    textAlign: 'center',
  },
  loginAction: {
    display: 'inline-block',
    marginRight: 10,
    padding: '8px 16px',
    backgroundImage: "url('/assets/buttonbg5.gif')",
    backgroundSize: 'cover',
    borderRadius: '4px',
    width: 86,
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 500,
  },
  enterAction: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundImage: "url('/assets/buttonbg6.gif')",
    borderRadius: '4px',
    backgroundSize: 'cover',
    width: 86,
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 500,
  },
  copyright: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  cplogo: {
    fontSize: '60vh',
    color: '#ffffff',
    opacity: 0.9,
  },
  slickDots: {
    bottom: 25,
    position: 'absolute',
  },
});
class login extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'app/update', payload: { pageloading: false } });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.page}>
          <div className={classes.bgwrapper}>
            <div className={classes.bgleft}>
              <div className={classes.bgleftTop} />
              <div className={classes.bgleftDown} />
            </div>
            <div className={classes.bgmiddle} />
            <div className={classes.bgright}>
              <div className={classes.bgrightTop} />
              <div className={classes.bgrightDown} />
            </div>
          </div>
          <div className={classes.bgTitle}>
            <div className={classes.copyright}>
              <p className={classes.cplogo}>G</p>
            </div>

            <p className={classes.bgTitleWord}>Material</p>
            <p className={classes.bgTitleWord}>Design</p>
          </div>
        </div>
        <LoginForm />
      </div>
    );
  }

}

export default connect(({ app }) => ({ app }))(withStyles(styles)(login));
