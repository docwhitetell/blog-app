import React from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import styles from './footerstyles'
import Hidden from 'material-ui/Hidden'

const Footer = ({classes})=>{
    return(
        <footer className={classes.footer}>
           {/* {withform &&  <div className={classes.registerForm}>
                <form className={classes.form} style={{width:'100%'}}>
                    <div className={classes.formGroup}>
                        <Icon type="mail" className={classes.formIcon}/>
                        <input type="email" className={classes.formInput} placeholder="Email"/>
                    </div>
                    <div className={classes.formGroup}>
                        <Icon type="user" className={classes.formIcon}/>
                        <input type="text" className={classes.formInput} placeholder="Name"/>
                    </div>
                    <div className={classes.formGroup}>
                        <Icon type="lock" className={classes.formIcon}/>
                        <input type="password" className={classes.formInput} placeholder="Password"/>
                    </div>

                    <Link to="/login" className={classes.register}>Sign Up</Link>

                </form>
            </div>}*/}

            <div className={classes.footerMain}>
                <Grid container spacing={0} >
                    <Grid item xs={12} sm={12} md={4}>
                        <div className={classes.footcopyright}>
                            <img className={classes.authorImg} src="/assets/index/author.png" width={100} alt=""/>
                            <p className={classes.author}>Author<br/> Doc.White(Wechat)</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <h1 className={classes.footLinksTitle}>Demos</h1>
                        <div>
                            <ul className={classes.footLinks}>
                                <li className={classes.footLinksItem}><Link to="/" className={classes.flink}>Home</Link></li>
                                <li className={classes.footLinksItem}><Link to="/blogs" className={classes.flink}>Blogs</Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}  md={4}>
                        <h1 className={classes.footLinksTitle}>Contacts</h1>
                        <div>
                            <ul className={classes.footLinks}>
                                <li className={classes.footLinksItem}>
                                    <Icon style={{color:'#ffffff',fontSize:18,marginRight:12}} type="mail"/>
                                    <a href="" className={classes.flink}>510559413@qq.com</a>
                                </li>
                               <li className={classes.footLinksItem}>
                                <Icon style={{color:'#ffffff',fontSize:18,marginRight:12}} type="mail"/>
                                <a href="http://www.miitbeian.gov.cn" className={classes.flink}>粤ICP 18005927 号</a>
                               </li>
                                <li className={classes.footLinksItem}><a href="http://webscan.360.cn/index/checkwebsite/url/www.docwhite.cn">
                                    <img height={30} src="http://webscan.360.cn/status/pai/hash/742c3054f0d87c2933414d47805d34fd"/></a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>

            </div>

        </footer>
    )
}

export default withStyles(styles)(Footer)
