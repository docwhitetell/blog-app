import React from 'react'
import {connect} from 'dva'
import { withStyles } from 'material-ui/styles';
import { convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Card from 'material-ui/Card';
import Button from 'material-ui/Button';
import { FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import MyEditor from '../../../components/editor/MyEditor'
import Grid from 'material-ui/Grid'
import {Icon} from 'antd'
//import Slider from 'react-slick'
//import 'slick-carousel/slick/slick.css'
//import 'slick-carousel/slick/slick-theme.css'
import { Upload, message} from 'antd';
import Cookies from 'js-cookie'

import config from '../../../utils/config'
import {filter} from '../../../services/filter'
import styles from './styles'
//{blogs,dispatch,classes}
class noteEditor extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
 /*     CKEDITOR.editorConfig = function( config ) {
        // Define changes to default configuration here. For example:
        // config.language = 'fr';
        // config.uiColor = '#AADC6E';
      };

      CKEDITOR.replace( 'editor1' );*/
    }
    onEditorStateChange=(editorState) =>{
        const {dispatch}=this.props
       dispatch({
           type:'blogs/update',
           payload:{editorState:editorState}
       })
    }
    handleSubmit=()=>{
        const {blogs,dispatch}=this.props
        const data=draftToHtml(convertToRaw(blogs.editorState.getCurrentContent()))
        const title=blogs.editTitle
        if(blogs.current){
            console.log('has current')
            dispatch({
                type:'blogs/updateBlog',
                payload:{title:title,classes:blogs.editClasses,poster:blogs.editPoster,description:blogs.editDescription,content:data,id:blogs.current.id}
            })
        }else{
            dispatch({
                type:'blogs/createBlog',
                payload:{title:title,classes:blogs.editClasses,poster:blogs.editPoster,description:blogs.editDescription,content:data}
            })
        }

    }

    handleInputChange=name=>e=>{
        const {blogs,dispatch}=this.props
        console.log(e.target.value)
        if(blogs.current!==null) {
            dispatch({
                type:'blogs/update',
                payload:{[name]:filter(e.target.value)}
            })
        }else{
            dispatch({
                type:'blogs/update',
                payload:{[name]:filter(e.target.value)}
            })
        }
    }

    render(){
        const {blogs,dispatch,classes}=this.props

        const { editorState } = blogs

        const props = {
            name: 'file',
            action: config.api.fileUpload,
            headers:{
                'Accept':'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization':'Bearer '+Cookies('access_token')
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    console.log(info.file.response.data.link)
                    dispatch({
                        type:'blogs/update',
                        payload:{editPoster:info.file.response.data.link}
                    })
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <div style={{marginTop:-68}}>
                <Grid container spacing={0} style={{margin:0,padding:20}}>
                    <Grid item xs={12} style={{position:'relative'}}>
                        <Card>
                            <div className={classes.title}>
                                <div style={{position:'relative'}}>
                                    <TextField
                                        margin="dense"
                                        label="Title"
                                        type="text"
                                        style={{width:300}}
                                        fullWidth
                                        value={blogs.editTitle?blogs.editTitle:''}
                                        className={classes.titleInput}
                                        onChange={this.handleInputChange('editTitle')}
                                    />
                                    <FormControl style={{position:"absolute",bottom:4,marginLeft:20}}>
                                        <InputLabel htmlFor="classes">Classes</InputLabel>
                                        <Select
                                            classes={{select: classes.PosterInput}}
                                            value={blogs.editClasses ? blogs.editClasses : ''}
                                            onChange={this.handleInputChange('editClasses')}
                                            input={<Input name="classes" id="classes" style={{width:100}}/>}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'tech'}>Tech</MenuItem>
                                            <MenuItem value={'personal'}>Personal</MenuItem>
                                            <MenuItem value={'daily'}>Daily</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <br/>
                                <div>
                                    <TextField
                                        margin="dense"
                                        label="Poster"
                                        type="text"
                                        style={{width:400}}
                                        fullWidth
                                        value={blogs.editPoster?blogs.editPoster:''}
                                        className={classes.PosterInput}
                                        onChange={this.handleInputChange('editPoster')}
                                    />
                                    <Upload {...props}>
                                        <Button raised color="primary">
                                            <Icon type="upload" /> Upload
                                        </Button>
                                    </Upload>
                                </div>

                                <TextField
                                    margin="dense"
                                    label="Description"
                                    type="text"
                                    style={{width:'100%'}}
                                    fullWidth
                                    value={blogs.editDescription?blogs.editDescription:''}
                                    className={classes.PosterInput}
                                    onChange={this.handleInputChange('editDescription')}
                                />

                            </div>
                       {/*   <textarea name="content" id="editor1">

                          </textarea>*/}
                            <MyEditor
                                wrapperStyle={{minHeight: 600}}
                                editorStyle={{height: 520,}}
                                editorState={editorState}
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </Card>
                    </Grid>

                </Grid>

                <div style={{textAlign:'center',marginBottom:20}}>
                    <Button raised color="accent" onClick={this.handleSubmit} style={{marginRight:20}}>
                        SAVE
                    </Button>
                    <Button raised color="primary" onClick={this.handleSubmit}>
                        PREVIEW
                    </Button>
                </div>

            </div>

        )

    }


}
export default connect(({app,blogs})=>({app,blogs}))(withStyles(styles)(noteEditor))
