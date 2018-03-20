import React from 'react';
import Grid from 'material-ui/Grid';
import { LinearProgress } from 'material-ui/Progress';
import Card from 'material-ui/Card';
import { Icon } from 'antd';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import AreasChart from '../../../../components/charts/AreasChart';
import BarsChart from '../../../../components/charts/BarChart';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS('layouts') || {};

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8-2')) || {};
    } catch (e) {
      /* Ignore */
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8-2',
      JSON.stringify({
        [key]: value,
      }),
    );
  }
}
class DataCard extends React.Component {
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
    const { data, classes } = this.props
    return (
      <div style={{ padding: '0 20px' }}>
        <ResponsiveReactGridLayout
          className="layout"
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 12, sm: 6, xs: 3, xxs: 3 }}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          <div key="1" data-grid={{ w: 3, h: 4, x: 0, y: 0, minW: 3, minH: 4 }}>
            <Card className={classes.dataCard}>
              <div className={classes.dataCardHeader}>
                <h3 className={classes.CardTitle}>Total sales
                  <span className={classes.cardHeaderInfo}>
                    <Icon type="info-circle-o" />
                  </span>
                </h3>
                <div className={classes.CardMain}>
                  <Grid container spacing={0} className={classes.BigWord}>
                    <h1 className={classes.dataCardNumber}>¥126,560</h1>
                    <div className={classes.dataCardExtra}>
                      <span className={classes.leftData}>Week:12% <Icon type="up" style={{ color: '#D50000' }} /></span>
                      <span className={classes.rightData}>Week:12% <Icon type="down" style={{ color: '#00E676' }} /></span>
                    </div>
                    <Grid className={classes.dataCardDivider} item xs={12} />
                    <Grid item xs={12}>
                      <p style={{ height: 24, lineHeight: '24px' }}>
                        <span style={{ marginRight: 20, lineHeight: '24px', fontSize: '14px', fontWeight: 500 }}>Daily sales</span>
                        <span style={{ fontSize: '14px', fontWeight: 500 }}>￥12,423</span>
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Card>
          </div>
          <div key="2" data-grid={{ w: 3, h: 4, x: 3, y: 0, minW: 3, minH: 4 }}>
            <Card className={classes.dataCard}>
              <div className={classes.dataCardHeader}>
                <h3 className={classes.CardTitle}>Visits
                  <span className={classes.cardHeaderInfo}>
                <Icon type="info-circle-o"/>
              </span>
                </h3>
                <div className={classes.CardMain}>
                  <Grid container spacing={0} className={classes.BigWord}>
                    <h1 className={classes.dataCardNumber}>8,848</h1>
                    <div className={classes.dataCardExtra}>
                      <AreasChart
                        height={48}
                        data={data}
                        dataKey="value"
                        stroke="#E91E63"
                        fill="#E91E63"
                        margin={{top: 0, right: 0, left: 0, bottom: 0}}
                      />
                    </div>

                    <Grid item xs={12} className={classes.dataCardDivider}/>
                    <Grid item xs={12}>
                      <p style={{height: 24, lineHeight: '24px'}}>
                        <span style={{marginRight: 20, lineHeight: '24px', fontSize: '14px', fontWeight: 500}}>Daily visits</span>
                        <span style={{fontSize: '14px', fontWeight: 500}}>￥12,423</span>
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Card>
          </div>
          <div key="3" data-grid={{ w: 3, h: 4, x: 6, y: 0, minW: 3, minH: 4 }}>
            <Card className={classes.dataCard}>
              <div className={classes.dataCardHeader}>
                <h3 className={classes.CardTitle}>
                  Total Payment
                  <span className={classes.cardHeaderInfo}>
                <Icon type="info-circle-o"/></span>
                </h3>
                <div className={classes.CardMain}>
                  <Grid container spacing={0} className={classes.BigWord}>
                    <h1 className={classes.dataCardNumber}>6,560</h1>
                    <div className={classes.dataCardExtra}>
                      <BarsChart
                        height={48}
                        data={data}
                        dataKey={'value'}
                        margin={{top: 0, right: 0, left: 0, bottom: 0}}
                        stroke={'#000'}
                        fill={'#2196F3'}
                      />
                    </div>

                    <Grid item xs={12} className={classes.dataCardDivider}/>
                    <Grid item xs={12}>
                      <p style={{height: 24, lineHeight: '24px'}}>
                        <span style={{marginRight: 20, lineHeight: '24px', fontSize: '14px', fontWeight: 500}}>Conversion rate</span>
                        <span style={{fontSize: '14px', fontWeight: 500}}>60%</span>
                      </p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Card>
          </div>
          <div key="4" data-grid={{ w: 3, h: 4, x: 9, y: 0, minW: 3, minH: 4 }}>
            <Card className={classes.dataCard}>
              <div className={classes.dataCardHeader}>
                <h3 className={classes.CardTitle}>Operation effect
                  <span className={classes.cardHeaderInfo}>
                <Icon type="info-circle-o"/>
              </span></h3>
                <div className={classes.CardMain}>
                  <Grid container spacing={0} className={classes.BigWord}>
                    <h1 className={classes.dataCardNumber}>78%</h1>
                    <div className={classes.dataCardExtra}>
                      <LinearProgress
                        style={{position: 'absolute', bottom: 20, height: 4, width: '100%'}}
                        mode="determinate"
                        value={78}
                        color="primary"
                      />
                    </div>
                    <Grid item xs={12} className={classes.dataCardDivider}/>
                    <Grid item xs={12}>
                      <div style={{width: '100%', height: 24}}>
                        <span className={classes.leftData}>Week:12% <Icon type="up" style={{color: '#D50000'}}/></span>
                        <span className={classes.rightData}>Week:12% <Icon type="down"
                                                                           style={{color: '#00E676'}}/></span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Card>
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default DataCard;
