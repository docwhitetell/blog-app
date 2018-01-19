import React from 'react'
import {connect} from 'dva'
import {withStyles} from 'material-ui/styles'

import Grid from 'material-ui/Grid'
import Card from 'material-ui/Card'
import MdTable from './components/mdTable'
import AntdTable from './components/antdTable'

const styles=theme=>({
    formGrid:{
        padding:20,

    },
    formWrapper:{
        borderRadius:10
    },
    formHeader:{
        background:theme.palette.primary[700],
        borderRadius:'6px 6px 0 0'
    },
    formTitle:{
        color:'#ffffff',
        fontWeight:300,
        fontFamily:'inherit',
        textIndent:'1rem',
        height:50,
        lineHeight:'50px',
        borderRadius:10
    },
    formContent:{
        borderRadius:'0 0 6px 6px',
        padding:20
    }
})
class Table extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes}=this.props
        return(
            <div style={{marginTop:-68}}>
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.formGrid}>
                        <Card className={classes.formWrapper}>
                            <div className={classes.formHeader}>
                                <h1 className={classes.formTitle}>Material Design</h1>
                            </div>
                            <div className={classes.formContent}>
                                <MdTable/>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} className={classes.formGrid}>
                        <Card className={classes.formWrapper}>
                            <div className={classes.formHeader}>
                                <h1 className={classes.formTitle}>Ant Design</h1>
                            </div>
                            <div className={classes.formContent}>
                                <AntdTable/>
                            </div>
                        </Card>


                    </Grid>
                </Grid>
            </div>
        )
    }

}


export default connect(({app})=>({app}))(withStyles(styles)(Table))
