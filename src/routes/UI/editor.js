import React from 'react'
import {connect} from 'dva'
import PageHeader from '../../components/pageHeader/pageHeader'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Card from 'material-ui/Card';
import MyEditor from '../../components/editor/MyEditor'

class UIEditor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            editorState:EditorState.createEmpty(),
        }
    }
    componentDidMount(){
        const {app,dispatch}=this.props
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
     onEditorStateChange=(editorState)=>{
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        this.setState({
            editorState
        })
     }
    render(){
        const {editorState}=this.state
        const {classes}=this.props
        return (
            <div style={{marginTop:-68}}>
                <div style={{margin:20}}>
                    <Card>
                        <MyEditor
                            wrapperStyle={{minHeight: 400,flex:2}}
                            editorStyle={{minHeight: 276,}}
                            editorState={editorState}
                            onEditorStateChange={this.onEditorStateChange}
                        />
                    </Card>
                    <textarea style={{
                        minHeight: 200,
                        width:'100%',
                        background: '#f7f7f7',
                        borderColor: '#F2F2F2',
                        marginTop:10,
                        padding: '16px 8px',flex:2}}
                              disabled
                              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    />
                </div>
            </div>
        )
    }

    //const editorState = state.editorState



}
export default connect(({app,editor})=>({app,editor}))(UIEditor)