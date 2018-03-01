import React from 'react';
import { connect } from 'dva';
import {withStyles} from 'material-ui/styles'
import classnames from 'classnames'

import Banner from './components/banner'
import Service from './components/service'

//import Button from 'material-ui/Button';
//import GradientProgress from '../../components/progress/gradient'
//import {Icon} from 'antd'
import ScrollAnim from 'rc-scroll-anim';
//import TweenOne from 'rc-tween-one';
const {OverPack}=ScrollAnim
import Hidden from 'material-ui/Hidden'
////import Slider from 'react-slick';
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import styles from './styles'
function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            style={{...style, display: 'block', right:10,zIndex:200}}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className}
            style={{...style, display: 'block',left:10,zIndex:200}}
            onClick={onClick}
        ></div>
    );
}

class Welcome extends React.Component{
    constructor(props){
        super(props)
    }

    handleOnWheel=(e)=>{
        console.log(e.deltaY)
    }

    componentDidMount(){
        const {app,dispatch}=this.props
        console.log()
        dispatch({
            type:'front/queryIndex'
        })
        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    componentDidUpdate(){
        console.log('mount')
        const {app,dispatch}=this.props
        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        const {app,front,classes,dispatch}=this.props
        return (
            <div className={classes.main}>
                <Banner classes={classes}/>
                <Service classes={classes} data={front} dispatch={dispatch}/>
             {/*   <OverPack style={{width: '100%',}} always={false} playScale={0.1}>
                    <TweenOne key={'products'} animation={[{opacity: 0, y: -20, scale: 0.94, duration: 300}, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 300
                    }]}
                              style={{opacity: 0, marginBottom: 10}}
                    >
                        <div className={classes.products}>
                            <Hidden mdDown implementation="css">
                                <div className={classes.productItemWrapper}>
                                    <div className={classes.productItemLeft}>
                                        <div className={classnames(classes.pBg, classes.plBg)}></div>
                                        <div className={classnames(classes.pMain)}>
                                            <div className={classnames(classes.pPrice)}>
                                                <h1 style={{fontSize: 56, color: 'rgba(0,0,0,0.86)'}}>
                                                    <small style={{fontSize: 32}}>$</small>
                                                    <strong>399</strong>
                                                </h1>
                                                <span style={{fontSize: 14, fontWeight: 600}}>Basic plan</span>
                                                <h1 className={classnames(classes.pPriceBg, classes.pPriceBgMid)}>
                                                    399
                                                </h1>
                                            </div>
                                        </div>
                                        <div className={classnames(classes.pMask, classes.plMask)}></div>
                                        <Button className={classnames(classes.pButton, classes.plButton)}>
                                            <Icon type="plus"/>
                                            <div
                                                className={classnames(classes.pButtonDenseTop, classes.plButtonDenseTop)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseLeft, classes.plButtonDenseLeft)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseRight, classes.plButtonDenseRight)}></div>
                                        </Button>
                                    </div>
                                    <div className={classes.productItemMid}>
                                        <div className={classnames(classes.pBg, classes.pmBg)}></div>
                                        <div className={classnames(classes.pMain)}>
                                            <div className={classnames(classes.pPrice)}>
                                                <h1 style={{fontSize: 78, color: 'rgba(0,0,0,0.86)'}}>
                                                    <small style={{fontSize: 42}}>$</small>
                                                    <strong>3999</strong>
                                                </h1>
                                                <span style={{fontSize: 14, fontWeight: 600}}>Professional plan</span>
                                                <h1 className={classnames(classes.pPriceBg, classes.pPriceBgBig)}>
                                                    3999
                                                </h1>
                                            </div>
                                        </div>
                                        <div className={classnames(classes.pMask, classes.pmMask)}></div>
                                        <Button className={classnames(classes.pButton, classes.pmButton)}>
                                            <Icon type="check"/>
                                            <div
                                                className={classnames(classes.pButtonDenseTop, classes.pmButtonDenseTop)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseLeft, classes.pmButtonDenseLeft)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseRight, classes.pmButtonDenseRight)}></div>
                                        </Button>
                                    </div>
                                    <div className={classes.productItemRight}>
                                        <div className={classnames(classes.pBg, classes.prBg)}></div>
                                        <div className={classnames(classes.pMain)}>
                                            <div className={classnames(classes.pPrice)}>
                                                <h1 style={{fontSize: 56, color: 'rgba(0,0,0,0.86)'}}>
                                                    <small style={{fontSize: 32}}>$</small>
                                                    <strong>1299</strong>
                                                </h1>
                                                <span style={{fontSize: 14, fontWeight: 600}}>Medium plan</span>
                                                <h1 className={classnames(classes.pPriceBg, classes.pPriceBgMid)}>
                                                    1299
                                                </h1>
                                            </div>
                                        </div>
                                        <div className={classnames(classes.pMask, classes.prMask)}></div>
                                        <Button className={classnames(classes.pButton, classes.prButton)}>
                                            <Icon type="plus"/>
                                            <div
                                                className={classnames(classes.pButtonDenseTop, classes.prButtonDenseTop)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseLeft, classes.prButtonDenseLeft)}></div>
                                            <div
                                                className={classnames(classes.pButtonDenseRight, classes.prButtonDenseRight)}></div>
                                        </Button>
                                    </div>
                                </div>
                            </Hidden>
                            <Hidden mdUp implementation="css">
                                <div style={{width: '100%', height: 360}}>
                                    <Slider {...settings}>
                                        <div className={classes.slickproduct}>
                                            <div className={classes.productItemLeft}>
                                                <div className={classnames(classes.pBg, classes.plBg)}></div>
                                                <div className={classnames(classes.pMain)}>
                                                    <div className={classnames(classes.pPrice)}>
                                                        <h1 style={{fontSize: 56, color: 'rgba(0,0,0,0.86)'}}>
                                                            <small style={{fontSize: 32}}>$</small>
                                                            <strong>27</strong>
                                                        </h1>
                                                        <span style={{fontSize: 14, fontWeight: 600}}>Basic plan</span>
                                                        <h1 className={classnames(classes.pPriceBg, classes.pPriceBgMid)}>
                                                            27
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className={classnames(classes.pMask, classes.plMask)}></div>
                                                <Button className={classnames(classes.pButton, classes.plButton)}>
                                                    <Icon type="plus"/>
                                                    <div
                                                        className={classnames(classes.pButtonDenseTop, classes.plButtonDenseTop)}></div>
                                                    <div
                                                        className={classnames(classes.pButtonDenseLeft, classes.plButtonDenseLeft)}></div>
                                                    <div
                                                        className={classnames(classes.pButtonDenseRight, classes.plButtonDenseRight)}></div>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={classes.slickproduct}>
                                            <div className={classes.productItemMid}>
                                                <div className={classnames(classes.pBg, classes.pmBg)}></div>
                                                <div className={classnames(classes.pMain)}>
                                                    <div className={classnames(classes.pPrice)}>
                                                        <h1 style={{fontSize: 78, color: 'rgba(0,0,0,0.86)'}}>
                                                            <small style={{fontSize: 42}}>$</small>
                                                            <strong>95</strong>
                                                        </h1>
                                                        <span style={{
                                                            fontSize: 14,
                                                            fontWeight: 600
                                                        }}>Professional plan</span>
                                                        <h1 className={classnames(classes.pPriceBg, classes.pPriceBgBig)}>
                                                            95
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className={classnames(classes.pMask, classes.pmMask)}></div>
                                                <Button className={classnames(classes.pButton, classes.pmButton)}>
                                                    <Icon type="check"/>
                                                    <div
                                                        className={classnames(classes.pButtonDenseTop, classes.pmButtonDenseTop)}></div>
                                                    <div
                                                        className={classnames(classes.pButtonDenseLeft, classes.pmButtonDenseLeft)}></div>
                                                    <div
                                                        className={classnames(classes.pButtonDenseRight, classes.pmButtonDenseRight)}></div>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={classes.slickproduct}>
                                            <div className={classes.productItemRight}>
                                                <div className={classnames(classes.pBg, classes.prBg)}></div>
                                                <div className={classnames(classes.pMain)}>
                                                    <div className={classnames(classes.pPrice)}>
                                                        <h1 style={{fontSize: 56, color: 'rgba(0,0,0,0.86)'}}>
                                                            <small style={{fontSize: 32}}>$</small>
                                                            <strong>63</strong>
                                                        </h1>
                                                        <span style={{fontSize: 14, fontWeight: 600}}>Medium plan</span>
                                                        <h1 className={classnames(classes.pPriceBg, classes.pPriceBgMid)}>
                                                            63
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className={classnames(classes.pMask, classes.prMask)}></div>
                                                <Button className={classnames(classes.pButton, classes.prButton)}>
                                                    <Icon type="plus"/>
                                                    <div
                                                        className={classnames(classes.pButtonDenseTop, classes.prButtonDenseTop)}></div>
                                                    <div
                                                        className={classnames(classes.pButtonDenseLeft, classes.prButtonDenseLeft)}></div>
                                                    <div
                                                        className={classnames(classes.pButtonDenseRight, classes.prButtonDenseRight)}></div>
                                                </Button>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </Hidden>
                            <div className={classes.proDetails}>
                                <div className={classes.pdLeft}>
                                    <h1 style={{color: '#ffffff', fontSize: 28}}>Exclusive customization</h1>
                                    <p style={{color: 'rgba(255,255,255,0.6)'}}>
                                        Based on the reaction framework of Facebook,
                                        GuGe's material design style is used to provide an infinite approximation of the
                                        operation fluency and experience of the app,
                                        while taking into account both mobile and PC browsing.
                                    </p>
                                </div>
                                <div className={classes.pdRight}>
                                    <div className={classes.pdDataProgress}>
                                        <span className={classes.pddpName}>PC</span>
                                        <GradientProgress
                                            data={{
                                                data: 92,
                                                height: 24, width: 'calc(100% - 100px)',
                                                color: 'linear-gradient(127deg, #303F9F,#1565C0)',
                                                bgcolor: '#ffffff',
                                            }}/>
                                    </div>
                                    <div className={classes.pdDataProgress}>
                                        <span className={classes.pddpName}>Mobile</span>
                                        <GradientProgress
                                            data={{
                                                data: 88,
                                                height: 24, width: 'calc(100% - 100px)',
                                                color: 'linear-gradient(127deg, #1565C0,#42A5F5)',
                                                bgcolor: '#ffffff',
                                            }}/>
                                    </div>
                                </div>
                            </div>
                            <Button className={classes.moreProducts}>Custom <Icon type="arrow-right"/></Button>
                        </div>
                    </TweenOne>
                </OverPack>*/}
            </div>
        );
    }

}

Welcome.propTypes = {
};

export default connect(({app,front})=>({app,front}))(withStyles(styles)(Welcome));
