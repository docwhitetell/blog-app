import React from 'react';
import Hidden from 'material-ui/Hidden';
import Slider from 'react-slick';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

import AreasChart from '../../../components/charts/AreasChart'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
class Banner extends React.Component{
    constructor(props){
        super(props)
        this.state={
            wave:[
                {
                    name:'data.no1',
                    value:1264,
                },
                {
                    name:'data.no2',
                    value:1864,
                },
                {
                    name:'data.no3',
                    value:1064,
                },
                {
                    name:'data.no4',
                    value:2264,
                },  {
                    name:'data.no5',
                    value:5264,
                },
                {
                    name:'data.no6',
                    value:2664,
                },
                {
                    name:'data.no7',
                    value:3864,
                },

            ]
        }
    }

    render(){
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        const {classes}=this.props
        return (
            <div className={classes.banner}>
                <div className={classes.bannerWrapper}>
                    <div className={classes.bannerBg}>
                    </div>

                    <div className={classes.bannerTitle} key="title">
                        <TweenOne animation={[{y: 0}, {y: 90, opacity: 1}]} style={{opacity: 0}}>
                            <h1 className={classes.titleWord}>Doctor White Personal Website</h1>
                        </TweenOne>
                        <TweenOne animation={[{y: 0}, {y: -60, opacity: 1, delay: 450}]} style={{opacity: 0}}>
                            <p className={classes.titleDescription}>
                                Share technology，Follow me and find more
                            </p>
                        </TweenOne>
                    </div>

                    <Hidden mdDown implementation="css">
                    <TweenOne className={classes.bannerImg} animation={[{y:200,delay:700},{y:0,opacity:1}]} style={{opacity:0}} >
                        <div className={classes.leftbg}>
                            <img src="/assets/index/banner1.png" style={{width:'100%'}} alt=""/>
                        </div>
                        <div className={classes.bannerMainImg}>
                            <img src="/assets/index/banner1.png" style={{width:'100%'}} alt=""/>
                        </div>
                        <div className={classes.rightbg}>
                            <img src="/assets/index/banner1.png" style={{width:'100%'}} alt=""/>
                        </div>
                    </TweenOne>
                    </Hidden>
                    <Hidden mdUp implementation="css">
                        <div style={{width:'100%',height:'60vw',overflow:'hidden'}}>
                            <Slider {...settings}>
                                <div><img src="/assets/index/banner1.png" style={{width:'100%'}} alt=""/></div>
                            </Slider>
                        </div>

                    </Hidden>
                </div>
            </div>
        )
    }

}
export default Banner