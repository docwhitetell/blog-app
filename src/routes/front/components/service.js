import React from 'react';
// import {Link} from 'dva/router';
// import classnames from 'classnames';
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
// import QueueAnim from 'rc-queue-anim';
import Grid from 'material-ui/Grid';
// import Hidden from 'material-ui/Hidden';
// import Button from 'material-ui/Button';
// import Dialog,
// {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
// import Play from 'material-ui-icons/PlayArrow';
// import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
const { OverPack } = ScrollAnim;

const Service = ({ data, classes }) => {
/*  const handleRequestClose = (index) => {
    // console.log(index)
    dispatch({
      type: 'front/dialogClose',
      payload: index
    });
  }
  const handleOpen = (index) => {
    console.log(index)
    dispatch({
      type: 'front/dialogOpen',
      payload: index,
    });
  }*/
  return (
    <div className={classes.mainContent}>
      <TweenOne
        key={'about'}
        className={classes.about}
        animation={[{ opacity: 0, scale: 0, delay: 1000, duration: 600 },
            { scale: 1, opacity: 1, y: 0 },
        ]}
        style={{ opacity: 0 }}
      >
        <div className={classes.aboutLeft}>
          <h1 className={classes.aboutTitle} style={{}}>Me</h1>
          <div className={classes.gradientDivider}></div>
        </div>
        <div className={classes.aboutRight}>
          <p className={classes.aboutWord}>
            我是 Doctor White，这是我的个人网站，除了熟悉前端HTML，css，JavaScript，常用的JavaScript框架如jquery，React，
            还对PHP有一定研究，能够熟练使用Laravel框架进行一般的后端功能和接口开发。
            目前在更深入探索React框架的大型网站应用的开发以及深入学习JavaScript语言的发展ES，ES6。虽然进入前端领域时间仅仅只有一年多一点的时间，
            但是我对于我的学习能力很自信，立志当前端领域的技术弄潮儿，希望在未来的成长过程中能多得到大神的指点.
            网站由于大量使用material-ui组件库，其对于flex布局以及css3新特性的使用让IE11以下浏览器无法完整浏览，见谅。
          </p>
        </div>
      </TweenOne>
      <div className={classes.work}>
        <OverPack style={{ width: '100%' }} always={false} playScale={0.1}>
          <h1 key="title" className={classes.sectionName}>最新文章</h1>
          <Grid key="container" container spacing={40} style={{ minHeight: 380 }}>
            {data.blogslist.map((item, index) => {
              return (
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <TweenOne
                    key={item.title}
                    animation={[
                      { opacity: 0, y: -2, duration: 300 }, { opacity: 1, y: 0, duration: 300 }]}
                    style={{ opacity: 0, marginBottom: 10 }}
                  >
                    <div className={classes.serviceItem}>
                      <div className={classes.serviceContent}>
                        <a href={`/blogs/${item.id}`}>
                          <div
                            className={classes.blogPoster}
                            style={{
                              backgroundImage: `url(${item.poster})`,
                            }}
                          />
                        </a>
                        <a href={`/blogs/${item.id}`}><h1 className={classes.serviceName}>{item.title}</h1></a>
                        <p className={classes.serviceDesc}>{item.description}</p>
                      </div>
                    </div>
                  </TweenOne>
                </Grid>
              );
            })}
          </Grid>
        </OverPack>
      </div>
    </div>
  );
}

export default Service;
