import React from 'react';
import { connect } from 'dva';
import { withStyles } from 'material-ui/styles';
// import classnames from 'classnames';
import { Link } from 'dva/router';
import { Icon } from 'antd';
// import Button from 'material-ui/Button';

const styles = theme => ({
  content: {
    // backgroundColor:'rgb(30,36,58)',
    padding: '0 0 60px 0',
  },
  poster: {
    height: 'calc(100vw / 2 )',
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  blogsTitle: {
    fontSize: 48,
    color: '#ffffff',
    position: 'relative',
    zIndex: 200,
    padding: '0 40px',
    // textShadow:'1px 1px 1px #FFFFFF',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  posterMask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainArticle: {
    width: '90%',
    maxWidth: 800,
    margin: '0 auto',
    minHeight: 600,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 40,
    padding: '20px 40px',
    position: 'relative',
    // boxShadow:'0 4px 10px rgba(0,0,0,0.1),4px 0px 10px rgba(0,0,0,0.1)',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 10px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '20px 10px',
    },
  },
  articleHead: {
    position: 'relative',
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 100,
    },
  },
  mainTitle: {
    fontSize: 36,
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
      paddingRight: '40px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      paddingRight: 0,
    },
    // color:'#01579B'
  },
  authorAvatar: {
    position: 'absolute',
    borderRadius: '50%',
    width: 100,
    [theme.breakpoints.up('sm')]: {
      right: -60, top: -40,
    },
    [theme.breakpoints.down('sm')]: {
      width: 80,
      left: '50%',
      bottom: -90,
      transform: 'translate(-50%,0)',
    },
  },
  link: {
    float: 'right',
    marginRight: 60,
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    },
  },
  articlebody: {
    // maxWidth:800,
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
    '& iframe': {
      display: 'block',
      margin: '10px auto',
      width: '100% !important',
      height: '337px !important',
      '& video': {},
    },
    '& p': {
      minHeight: 22,
      lineHeight: 1.7,
    },

  },
  articleShareIcon: {
    marginRight: 10,
    fontSize: 18,
    color: 'rgba(0,0,0,0.4)',
    '&:hover': {
      color: '#2196F3',
    },
  },
  floatPart: {
    position: 'fixed',
    top: 20,
  },
  floatPartInner: {
    position: 'relative',
    margin: '0 auto',
  }
})
class Detail extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({ type: 'app/update', payload: { pageloading: false } });
  }

  componentDidUpdate() {
    const spanList = document.getElementById('articlebody').getElementsByTagName('span')
    for (let i = 0; i < spanList.length; i += 1) {
      spanList.item(i).innerHTML = spanList.item(i).innerHTML.replace(/ /g, '&nbsp;')
      console.log(spanList.item(i).innerHTML);
    }
  }
  render() {
    const { blogs, classes } = this.props

    return (
      <div>
        {blogs.current &&
        <div className={classes.content}>
          <div className={classes.poster} style={{ backgroundImage: `url(${blogs.current.poster})` }}>
            <div className={classes.blogsTitle}>
              {blogs.current.title}
            </div>
            <div className={classes.posterMask} />
          </div>

          <div className={classes.mainArticle}>
            <div className={classes.articleHead}>
              <h1 className={classes.mainTitle}>{blogs.current.title} </h1>
              <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.4)' }}>{blogs.current.created_at}
                <Link to="/blogs" className={classes.link}>
                  <Icon type="share-alt" className={classes.articleShareIcon} />
                  <Icon type="github" className={classes.articleShareIcon} />
                </Link>
              </p>
              <img src="/assets/blogs/authorimg.jpg" className={classes.authorAvatar} alt="" />
            </div>
            <div id="articlebody" className={classes.articlebody} dangerouslySetInnerHTML={{ __html: blogs.current.content }} />
            <div className={classes.floatPart}>
              <div className={classes.floatPartInner} />
            </div>
          </div>
        </div>
        }
      </div>
    );
  }
}


export default connect(({ blogs }) => ({ blogs }))(withStyles(styles)(Detail));
