import React from 'react'
import Grid from 'material-ui/Grid';
import Dropzone from '../../../components/upload/Dropzone'
import AntdUpload from '../../../components/upload/antdUpload'
import AntdMultiUpload from '../../../components/upload/antdMutilUpload'

import Button from 'material-ui/Button';
import {connect} from 'dva'
class filesUpload extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    componentDidUpdate(){

    }
    render(){
        return (
            <div style={{marginTop:-68}}>
                <Grid container style={{display:'block',margin:20,width:'auto'}}>
                    <Grid item style={{background:'#e3e3e3',borderRadius:10,marginTop:100}} xs={12}>
                        {/* <Dropzone/>*/}
                    {/*    <AntdUpload/>*/}
                        <AntdMultiUpload/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button raised color="primary" style={{width:'100%'}}>
                            My Files
                        </Button>
                    </Grid>

                </Grid>
            </div>
        )
    }

}
export default connect(({app})=>({app}))(filesUpload)
