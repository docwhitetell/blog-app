import React from 'react';
// import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { Icon } from 'antd';
import CountUp from 'react-countup';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS('layouts') || {};

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {
      /* Ignore */
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      }),
    );
  }
}
// import styles from '../style.css'
class NumberCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
    };
  }
  static get defaultProps() {
    return {
      className: 'layout',
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30,
    };
  }
  resetLayout() {
    this.setState({ layouts: {} });
  }
  onLayoutChange(layout, layouts) {
    saveToLS('layouts', layouts);
    this.setState({ layouts });
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ padding : '0 20px' }}>
        <ResponsiveReactGridLayout
          className="layout"
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 12, sm: 6, xs: 3, xxs: 3}}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          <div key="1" data-grid={{w: 3, h: 3, x: 0, y: 0, minW: 3, minH: 3}}>
            <Card className={classes.card} style={{backgroundImage: "url('/assets/card1.png')", backgroundSize: 'cover'}}>
              <div className={classes.cardLeft}>
                <Icon type="pay-circle-o" className={classes.icon} style={{color: '#00E676'}}/>
              </div>
              <div className={classes.cardRight}>
                <h5 className={classes.crNum}>Online Review</h5>
                <h1 className={classes.crTitle}>
                  <CountUp
                    start={0}
                    end={2781}
                    duration={2.75}
                    useEasing
                    separator=","
                  />
                </h1>
              </div>
            </Card>
          </div>
          <div key="2" data-grid={{w: 3, h: 3, x: 3, y: 0, minW: 3, minH: 3}}>
            <Card className={classes.card} style={{backgroundImage: "url('/assets/card2.png')", backgroundSize: 'cover'}}>
              <div className={classes.cardLeft}>
                <Icon
                  type="team"
                  className={classes.icon}
                  style={{color: '#03A9F4'}}
                />
              </div>
              <div className={classes.cardRight}>
                <h5 className={classes.crNum}>New Customers</h5>
                <h1 className={classes.crTitle}>
                  <CountUp
                    start={0}
                    end={3241}
                    duration={2.75}
                    useEasing
                    separator=","
                  />
                </h1>
              </div>
            </Card>
          </div>
          <div key="3" data-grid={{w: 3, h: 3, x: 6, y: 0, minW: 3, minH: 3}}>
            <Card className={classes.card} style={{backgroundImage: "url('/assets/card3.png')", backgroundSize: 'cover'}}>
              <div className={classes.cardLeft}>
                <Icon type="message" className={classes.icon} style={{color: '#7E57C2'}}/>
              </div>
              <div className={classes.cardRight}>
                <h5 className={classes.crNum}>Active Projects</h5>
                <h1 className={classes.crTitle}>
                  <CountUp
                    start={0}
                    end={253}
                    duration={2.75}
                    useEasing
                    separator=","
                  />
                </h1>
              </div>
            </Card>
          </div>
          <div key="4" data-grid={{w: 3, h: 3, x: 9, y: 0, minW: 3, minH: 3}}>
            <Card className={classes.card} style={{backgroundImage: "url('/assets/card4.png')", backgroundSize: 'cover'}}>
              <div className={classes.cardLeft}>
                <Icon type="shopping-cart" className={classes.icon} style={{color: '#E91E63'}}/>
              </div>
              <div className={classes.cardRight}>
                <h5 className={classes.crNum}>Referrals</h5>
                <h1 className={classes.crTitle}>
                  <CountUp
                    start={0}
                    end={4324}
                    duration={2.75}
                    useEasing
                    separator=","
                  />
                </h1>
              </div>
            </Card>
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
NumberCard.propTypes = {

}
export default NumberCard;
