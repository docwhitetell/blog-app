import React from 'react';
import { connect } from 'dva';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import classnames from 'classnames';
import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Icon, Pagination } from 'antd';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import Card, { CardHeader, CardMedia, CardContent, CardActions} from 'material-ui/Card';
import Loading from '../../../../components/loading/FrontLoading';

import styles from './blogstyles';

const { OverPack } = ScrollAnim;
class Blogs extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {app,dispatch}=this.props
        dispatch({
            type:"front/queryBlogs"
        })

        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    componentDidUpdate(){
        const {app,dispatch}=this.props
        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    onChange =(pageNumber)=> {
        console.log('Page: ', pageNumber);
    }
    handleChangeClass=name=>e=>{
        const {dispatch}=this.props
        switch (name){
            case 'personal':
                dispatch({
                    type:'front/queryBlogs',
                    payload:{classes:'personal'}
                })
                break;
            case 'all':
                dispatch({
                    type:'front/queryBlogs',
                })
                break;
            default:
                break;
        }
    }
    render(){
        const {app,front,classes,loading,dispatch}=this.props
        return(
            <div className={classes.main}>
                <div className={classes.content}>
                    <div className={classes.headerbg}>
                        <div className={classes.bgimg}></div>
                        <div className={classes.bgcolor}></div>
                    </div>
                    <div className={classes.blogsListcontent}>
                        <div className={classes.author}>
                            <div className={classes.authorimg}>
                                <TweenOne animation={[{scale:0.8,delay:450},{scale:1,opacity:1}]} style={{opacity:0}} >
                                <img className={classes.authorAvatar} src="/assets/blogs/authorimg.jpg" alt=""/>
                                </TweenOne>
                            </div>
                            <div className={classes.authorInfo}>
                                <TweenOne animation={[{y:-60},{y:0,opacity:1}]} style={{opacity:0}} >
                                    <h1 className={classes.authorName}>Doctor White</h1>
                                </TweenOne>
                                <TweenOne animation={[{x:100,delay:250},{x:0,opacity:1}]} style={{opacity:0}} >
                                <p className={classes.authorPersonalInfo}> Feb 2, 1994 &nbsp;&nbsp;&nbsp;&nbsp;Zhongshan CN&nbsp;&nbsp;&nbsp;&nbsp;  <a href="" style={{fontSize:14}}><Icon type="star"/>510559413@qq.com</a></p>
                                <p className={classes.authordesc}>走在成为全栈工程师的路上，分享所思所学所想</p>
                                <p className={classes.sourceCode}>Source Code&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/docwhitetell/laravel-react" target="_blank"><Icon type="github" style={{fontSize:18}}/></a></p>
                                </TweenOne>
                            </div>
                        </div>
                        <div className={classes.listsWrapper}>
                            <TweenOne animation={[{delay:450},{opacity:1}]} style={{opacity:0}} >
                            <h3 className={classes.blogsClass}></h3>
                            </TweenOne>
                            <TweenOne animation={[{delay:650},{opacity:1}]} style={{opacity:0}} >
                            <h5 className={classes.blogsDesc}></h5>
                            </TweenOne>
                        </div>

                        <TweenOne className={classes.blogsWrapper} animation={[{scale:0.9,delay:750},{scale:1,opacity:1}]} style={{opacity:0}} >
                            <div className={classes.blogsListContent}>
                                <div className={classes.listsHead}>
                                    <div className={classnames(classes.listsHeadShadow1,'headShadow1')}></div>
                                    <div className={classnames(classes.listsHeadShadow2,'headShadow2')}></div>
                                    <Button style={{marginLeft:0}} className={classnames(classes.menuButton)}>
                                        <Icon type="appstore" style={{fontSize:30,color:'#2196F3'}}/>
                                    </Button>
                                    <div className={classes.menuLists}>
                                        <Tooltip placement="bottom" title="所有">
                                            <Button className={classnames(classes.menuButton)}
                                                    onClick={this.handleChangeClass('all')}>
                                                <Icon type="calendar" className={classnames(classes.menuIcon)}/>
                                            </Button>
                                        </Tooltip>
                                        <Tooltip placement="bottom" title="其他">
                                            <Button className={classnames(classes.menuButton)}
                                                    onClick={this.handleChangeClass('personal')}>
                                                <Icon type="edit" className={classnames(classes.menuIcon)}/>
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className={classes.blogsList} >
                                    <div className={classes.blogsCount}>
                                        <span style={{fontSize:28}}>文章</span>&nbsp;&nbsp;&nbsp;&nbsp;<small style={{color:'rgba(0,0,0,0.5)',fontWeight:600,fontSize:14}}> {front.blogs.total} Total</small>
                                    </div>
                                    <Grid container spacing={24} style={{position:'relative'}}>
                                        <Grid item xs={12}>
                                            <Card>
                                                <div className={classes.cardHeader}>
                                                    <h1 className={classes.cardTitle}>过去一周</h1>
                                                </div>
                                                <Divider/>
                                                <div className={classes.articleData}>
                                                    <div className={classes.dataItem}>
                                                        <div className={classes.dataIcon}>
                                                            <img className={classes.dataIconImg} src="/assets/blogs/icon1.png" alt=""/>
                                                        </div>
                                                        <div className={classes.dataInfo}>
                                                            <h1 className={classes.dataNum}>
                                                                {front.blogs.lastSevenDayPublish}
                                                                </h1>
                                                            <p className={classes.dataName}>新发布</p>
                                                        </div>
                                                    </div>
                                                    <div className={classes.dataItem}>
                                                        <div className={classes.dataIcon}>
                                                            <img className={classes.dataIconImg} src="/assets/blogs/icon2.png" alt=""/>
                                                        </div>
                                                        <div className={classes.dataInfo}>
                                                            <h1 className={classes.dataNum}>{front.blogs.classes.length}</h1>
                                                            <p className={classes.dataName}>文章类型</p>
                                                        </div>
                                                    </div>
                                                    <div className={classes.dataItem}>
                                                        <div className={classes.dataIcon}>
                                                            <img className={classes.dataIconImg} src="/assets/blogs/icon3.png" alt=""/>
                                                        </div>
                                                        <div className={classes.dataInfo} >
                                                            <h1 className={classes.dataNum}>{front.blogs.lastSevenDayPublish}</h1>
                                                            <p className={classes.dataName}>total</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Grid>
                                        <Loading loading={loading.global}/>
                                        { front.blogslist.map((item,index)=>{
                                            return(
                                                <TweenOne component={Grid} animation={[{x:index%2===0?-60:60},{x:0,opacity:1}]} style={{opacity:0}}  item xs={12} sm={6} md={6} key={index}>
                                                    <Card>
                                                        <div className={classes.cardHeader}>
                                                            <a href={`/blogs/${item.id}`}>
                                                                <h1 className={classes.articleTitle}>
                                                                    {item.title}
                                                                </h1>
                                                            </a>
                                                        </div>
                                                        <Divider/>
                                                        <a href={`/blogs/${item.id}`}>
                                                            <div className={classes.articleDesc}>
                                                                <div className={classes.articleDescWord}>
                                                                    <p className={classes.description}>{item.description}</p>
                                                                    <span style={{fontSize:12}}>{item.created_at}</span>
                                                                </div>
                                                                <div className={classes.blogBg} style={{backgroundImage: `url(${item.poster})`}}></div>
                                                            </div>
                                                        </a>
                                                    </Card>
                                                </TweenOne>
                                            )
                                        })}
                                      {/*  {front.blogslist.length===0 &&
                                            <Grid item xs={12}>
                                                <Card>
                                                    <h1>Nothing yet</h1>
                                                </Card>
                                            </Grid>
                                        }*/}
                                   {/*     <OverPack component={Grid} container spacing={24} style={{width:'100%',margin:0}} always={true} playScale={0.1}>
                                            <QueueAnim component={Grid} container spacing={24} key="queue"
                                                       leaveReverse={false}
                                                       style={{  position: 'relative',padding:12}}
                                            >
                                                { front.blogslist.map((item,index)=>{
                                                    return(
                                                        <Grid item xs={12} sm={6} md={6} key={index}>
                                                            <Card>
                                                                <div className={classes.cardHeader}>
                                                                    <Link to={`/blogs/${item.id}`}>
                                                                        <h1 className={classes.articleTitle}>
                                                                            {item.title}
                                                                        </h1>
                                                                    </Link>
                                                                </div>
                                                                <Divider/>
                                                                <Link to={`/blogs/${item.id}`}>
                                                                    <div className={classes.articleDesc}>
                                                                        <p className={classes.articleDescWord}>
                                                                            {item.description}
                                                                            <br/>
                                                                            <span style={{fontSize:12}}>{item.created_at}</span>
                                                                        </p>
                                                                        <div className={classes.blogBg} style={{backgroundImage: `url(${item.poster})`}}></div>
                                                                    </div>
                                                                </Link>
                                                            </Card>
                                                        </Grid>
                                                    )
                                                })}
                                            </QueueAnim>
                                        </OverPack>*/}
                                    </Grid>
                                </div>
                            </div>
                        </TweenOne>

                        {/*<div className={classes.paginate} style={{width:'90%',maxWidth:1000,margin:'0 auto',textAlign:'center'}}>
                            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
                        </div>*/}
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(({app,front,loading})=>({app,front,loading}))(withStyles(styles)(Blogs))
