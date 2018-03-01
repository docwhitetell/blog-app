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
            <TweenOne animation={[{ y: -100 }, { y: 0, opacity: 1 }]} style={{ opacity: 0 }}>
              <img src="/assets/blogs/authorimg.jpg" width={100} alt="" style={{ borderRadius: '50%' }}/>
            </TweenOne>
            <TweenOne animation={[{ y: 0 }, { y: 90, opacity: 1 }]} style={{ opacity: 0 }}>
              <h1 className={classes.titleWord}>Doctor White</h1>
            </TweenOne>
            <div>
              <TweenOne
                animation={[{ y: -60 }, { y: 0, opacity: 1, delay: 450 }]}
                style={{ opacity: 0, display: 'inline-block' }}
              >
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                    全栈攻城狮 （ 1.5年 ）
                </span>
              </TweenOne>
              <TweenOne
                animation={[{ x: 160 }, { x: 0, opacity: 1, delay: 550 }]}
                style={{ opacity: 0, display: 'inline-block' }}
              >
                <span style={{ fontSize: 16, fontWeight: 500 }}>
                   华侨大学 网络工程
                </span>
              </TweenOne>
            </div>

            <TweenOne
              animation={[{ y: 0 }, { y: -60, opacity: 1, delay: 850 }]}
              style={{ opacity: 0 }}
            >
              <p className={classes.titleDescription}>
                这是我的个人技术&博客分享网站，同时也是对React全家桶的学习&实践
              </p>
            </TweenOne>
          </div>
        </div>
      </div>
    );
  }

}
export default Banner;
