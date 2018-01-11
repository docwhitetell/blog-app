import React from 'react'
import { connect } from 'dva';
import {withStyles} from 'material-ui/styles'


const styles=(theme)=>({

})
class Paper extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <div className="header">

                </div>
            </div>
        )
    }
}
export default connect(({app,dispatch})=>({app,dispatch}))(withStyles(styles)(Paper))