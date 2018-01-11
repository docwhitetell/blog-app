import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'dva'
import {Pagination} from 'antd'
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
const styles = {
    card: {
        height:310
    },
    media: {
        height: 180,
    },
    content:{
        height:90,
        paddingBottom:0
    },
    title:{
        height:32,
        overflow:'hidden'
    },
    description: {
        height:40,
        textOverflow:'ellipsis',
        display:'-webkit-box',
        wordBreak:'break-all',
        webkitBoxOrient:'vertical',
        webkitLineClamp:3,
        overflow:'hidden'
    },
    pagination:{
        margin:'10px auto'
    },
    cardAction:{
        height:42
    }

};

class News extends React.Component{
    queryNews=(page)=>{
        const {dispatch}=this.props
        dispatch({
            type:'news/getNewsdata',
            payload:page
        })
    }
    pageOnChange=(current)=>{
        //console.log(current)
        const {dispatch}=this.props
        dispatch({
            type:'news/getNewsdata',
            payload:current
        })
    }
    componentDidMount() {
        this.queryNews(1)
    }
    render(){
        const {classes,news,loading}=this.props
        return(
            <div style={{marginTop:-68}}>
                <Grid container spacing={24} style={{maxWidth:1200,margin:20,width:'auto',}}>
                    { news.list.map((item,index)=>(  <Grid key={item.id} item xs={12} sm={6} md={6} lg={4}>
                        <Card className={classes.card}>
                            <Link to='/news'>
                                <CardMedia
                                        className={classes.media}
                                        image={item.poster}
                                        title="Contemplative Reptile"
                                />
                            </Link>
                            <CardContent className={classes.content}>
                                <Typography type="headline" component="h2" className={classes.title}>
                                    {item.title}
                                </Typography>
                                <Typography component="p"  className={classes.description}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardAction}>
                                <Button dense color="primary">
                                    Share
                                </Button>
                                <Button dense color="primary" href='/news'>
                                    More
                                </Button>
                                <Button dense color="primary" href='/news'>
                                    {item.createTime}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>)) }
                    <Pagination className={classes.pagination} showQuickJumper defaultCurrent={news.current} total={news.total} onChange={this.pageOnChange} />
                </Grid>
            </div>
        )
    }

}
export default connect(({news,loading})=>({news,loading}))(withStyles(styles)(News))