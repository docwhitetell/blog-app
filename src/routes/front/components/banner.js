import React from 'react';
// import Hidden from 'material-ui/Hidden';
import TweenOne from 'rc-tween-one';
// import QueueAnim from 'rc-queue-anim';

// import AreasChart from '../../../components/charts/AreasChart';


class Banner extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.banner}>
        <div className={classes.bannerWrapper}>
          <div className={classes.bannerBg} />
          <div className={classes.bannerTitle} key="title">
            <img src="/assets/blogs/authorimg.jpg" width={100} alt="" style={{ borderRadius: '50%' }} />
            <TweenOne animation={[{ y: 0 }, { y: 90, opacity: 1 }]} style={{ opacity: 0 }}>
              <h1 className={classes.titleWord}>Doctor White</h1>
            </TweenOne>
            <div>
              <span style={{ fontSize: 16, fontWeight: 500 }}>
                    全栈攻城狮 （ 1.5年 ）
              </span>
              <span style={{ fontSize: 16, fontWeight: 500 }}>
                   华侨大学 网络工程
                </span>
            </div>
            <p className={classes.titleDescription}>
              这是我的个人技术&博客分享网站，同时也是对React全家桶的学习&实践
            </p>
          </div>
        </div>
      </div>
    );
  }

}
export default Banner;
