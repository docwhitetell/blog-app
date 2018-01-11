import React from 'react'
import {withStyles} from 'material-ui/styles'
const styles=theme=>({
    ProgressWrapper:{

    }
})
const GradientProgress=({data,classes})=>{
    const style={
        height:data.height,
        width:data.width,
        background:data.bgcolor,
        position:'relative',
        borderRadius:`${data.height/2}px`,
    }

    return (
        <div className={classes.ProgressWrapper} style={style}>
            <p style={{
                position:'absolute',
                width:`${data.data}%`,
                height:'100%',
                background:`${data.color}`,
                borderRadius:`${data.height/2}px`
            }}></p>
        </div>
    )
}

export default withStyles()(GradientProgress)