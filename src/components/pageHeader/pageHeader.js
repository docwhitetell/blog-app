import React from 'react'
import { withStyles } from 'material-ui/styles';
const styles=theme=>({
    pageHeader:{
        backgroundColor:'inherit',
      /*  backgroundColor:theme.palette.primary[800],*/
        height:120
    },
    pageTitle:{
        color:'#455A64',
        height:120,
        lineHeight:'80px',
        fontSize:24,
        textIndent:20,
        fontWeight:400,
        fontFamily:'inherit'
    }
})


const pageHeader=({title,children,classes})=>{
    return(
        <section className={classes.pageHeader}>
            <p className={classes.pageTitle}>{title}</p>
            {children}
        </section>
    )
}

export default withStyles(styles)(pageHeader)