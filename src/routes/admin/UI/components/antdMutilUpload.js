import React from 'react'
import { Upload, Icon, message } from 'antd';
import Cookies from 'js-cookie'
const Dragger = Upload.Dragger;

const props = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    action: 'http://www.gitbase.com/api/file/upload',
    headers:{
        'Accept':'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':'Bearer '+Cookies('access_token')
    },
    onChange(info) {
      /*  const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        console.log(info);
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }*/
      const status=info.fileList;
      status.map((item,index)=>{

      })
      if(status.response.error){
          message.error(`${info.file.name} file upload failed.`);
      }else{
          message.success(`${info.file.name} file uploaded successfully.`);
      }
    },
};
export default class AntdMutilUpload extends React.Component{
    render(){
        return(
            <div style={{ marginTop: 16, height: 180 }}>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                </Dragger>
            </div>
        )
    }
}