import React from 'react'
import PropTypes from 'prop-types'
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import {Icon} from 'antd'
import CountUp from 'react-countup';

//import styles from '../style.css'
const NumberCard=({classes})=>{
    return (
        <Grid spacing={0} container className={classes.cardRow}>
            <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
                <Card className={classes.card} style={{backgroundImage:"url('/assets/card1.png')",backgroundSize:'cover'}}>
                    <div className={classes.cardLeft}>
                        <Icon type='pay-circle-o' className={classes.icon} style={{color:'#00E676'}} />
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
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
                <Card className={classes.card} style={{backgroundImage:"url('/assets/card2.png')",backgroundSize:'cover'}}>
                    <div className={classes.cardLeft}>
                        <Icon type='team' className={classes.icon} style={{color:'#03A9F4'}} />
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
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
                <Card className={classes.card} style={{backgroundImage:"url('/assets/card3.png')",backgroundSize:'cover'}}>
                    <div className={classes.cardLeft}>
                        <Icon type='message' className={classes.icon} style={{color:'#7E57C2'}} />
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
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{padding:4}}>
                <Card className={classes.card} style={{backgroundImage:"url('/assets/card4.png')",backgroundSize:'cover'}}>
                    <div className={classes.cardLeft}>
                        <Icon type='shopping-cart' className={classes.icon} style={{color:'#E91E63'}} />
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
            </Grid>
        </Grid>
    )
}
NumberCard.propTypes = {

}
export default NumberCard
