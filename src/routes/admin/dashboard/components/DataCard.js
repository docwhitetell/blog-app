import React from 'react';
import Grid from 'material-ui/Grid';
import { LinearProgress } from 'material-ui/Progress';
// import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import { Icon } from 'antd';
import AreasChart from '../../../../components/charts/AreasChart';
import BarsChart from '../../../../components/charts/BarChart';

const DataCard = ({ data, classes }) => {
  return (
    <Grid spacing={0} container className={classes.cardRow}>
      <Grid item xs={12} sm={6} md={3} style={{ padding: 4 }}>
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
                    <span
                      style={{ marginRight: 20, lineHeight: '24px', fontSize: '14px', fontWeight: 500 }}
                    >Daily sales</span>
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>￥12,423</span>
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3} style={{ padding: 4 }}>
        <Card className={classes.dataCard}>
          <div className={classes.dataCardHeader}>
            <h3 className={classes.CardTitle}>Visits
              <span className={classes.cardHeaderInfo}>
                <Icon type="info-circle-o" />
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
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  />
                </div>

                <Grid item xs={12} className={classes.dataCardDivider} />
                <Grid item xs={12}>
                  <p style={{ height: 24, lineHeight: '24px' }}>
                    <span style={{ marginRight: 20, lineHeight: '24px', fontSize: '14px', fontWeight: 500 }} >Daily visits</span>
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>￥12,423</span>
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3} style={{ padding: 4 }}>
        <Card className={classes.dataCard}>
          <div className={classes.dataCardHeader}>
            <h3 className={classes.CardTitle}>
              Total Payment
              <span className={classes.cardHeaderInfo}>
                <Icon type="info-circle-o" /></span>
            </h3>
            <div className={classes.CardMain}>
              <Grid container spacing={0} className={classes.BigWord}>
                <h1 className={classes.dataCardNumber}>6,560</h1>
                <div className={classes.dataCardExtra}>
                  <BarsChart
                    height={48}
                    data={data}
                    dataKey={'value'}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    stroke={'#000'}
                    fill={'#2196F3'}
                  />
                </div>

                <Grid item xs={12} className={classes.dataCardDivider} />
                <Grid item xs={12}>
                  <p style={{ height: 24, lineHeight: '24px' }}>
                    <span style={{ marginRight: 20, lineHeight: '24px', fontSize: '14px', fontWeight: 500 }}>Conversion rate</span>
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>60%</span>
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3} style={{ padding: 4 }}>
        <Card className={classes.dataCard}>
          <div className={classes.dataCardHeader}>
            <h3 className={classes.CardTitle}>Operation effect
              <span className={classes.cardHeaderInfo}>
                <Icon type="info-circle-o" />
              </span></h3>
            <div className={classes.CardMain}>
              <Grid container spacing={0} className={classes.BigWord}>
                <h1 className={classes.dataCardNumber}>78%</h1>
                <div className={classes.dataCardExtra}>
                  <LinearProgress
                    style={{ position: 'absolute', bottom: 20, height: 4, width: '100%' }}
                    mode="determinate"
                    value={78}
                    color="primary"
                  />
                </div>
                <Grid item xs={12} className={classes.dataCardDivider} />
                <Grid item xs={12}>
                  <div style={{ width: '100%', height: 24 }}>
                    <span className={classes.leftData}>Week:12% <Icon type="up" style={{ color: '#D50000' }} /></span>
                    <span className={classes.rightData}>Week:12% <Icon type="down" style={{ color: '#00E676' }} /></span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default DataCard;
