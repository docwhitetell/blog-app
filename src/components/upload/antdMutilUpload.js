import React from 'react'
import { Upload, Icon, message } from 'antd';
import Cookies from 'js-cookie'
import config from '../../utils/config'
const Dragger = Upload.Dragger;

message.config({
    top:100,
    }
)
const props = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    accept:'.png,.jpg,.mp4',
    action: config.api.fileUpload,
    headers:{
        'Accept':'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':'Bearer '+Cookies('access_token')
    },
    onChange(info) {
        const status = info.file.status;
       /* if (status !== 'uploading') {
            console.log(info.file, info.fileList);
            message.loading('Uploading!',1)
        }*/
        console.log(info);
        if (status === 'done') {
            console.log('done')
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            console.log('error')
            message.error(`${info.file.name} file upload failed.${info.file.response.error}`);
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
                    <p className="ant-upload-hint">Only Accept this MIME TYPE files .png .jpg .mp4</p>

                </Dragger>
            </div>
        )
    }
}