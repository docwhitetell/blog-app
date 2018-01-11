import React from 'react';
import { connect } from 'dva';
import {withStyles} from 'material-ui/styles'
import classnames from 'classnames'

import Banner from './components/banner'
import Service from './components/service'

import Button from 'material-ui/Button';
import GradientProgress from '../../components/progress/gradient'
import {Icon} from 'antd'
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
const {OverPack}=ScrollAnim
import Hidden from 'material-ui/Hidden'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

class Paper extends React.Component{
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
        </div>
);
}

}

Paper.propTypes = {
};

export default connect(({app,front})=>({app,front}))(withStyles(styles)(Paper));