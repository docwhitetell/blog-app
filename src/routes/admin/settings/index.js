import React from 'react'
import {withStyles} from 'material-ui/styles'
import {connect} from 'dva'

const styles=theme=>({

})

const SettingIndex=({app,settings,dispatch})=>{

  return (<div>

  </div>)
}

export default connect(({app,settings})=>({app,settings}))(withStyles(styles)(SettingIndex))
