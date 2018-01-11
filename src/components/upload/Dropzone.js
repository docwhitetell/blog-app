import 'dropzone/dist/min/dropzone.min.css'

import Cookies from 'js-cookie'
import React from 'react';
import config from '../../utils/config'
import DropzoneComponent from 'react-dropzone-component';
import Button from 'material-ui/Button';
import store from 'store'
export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif', '.mp4'],
            showFiletypeIcon: true,
            postUrl:'http://www.gitbase.com/api/file/upload'
        };

        this.dropzone = null;
    }

    handleFileAdded(file) {
        console.log(file);
    }


    render() {
        const config = this.componentConfig;
        const djsConfig =  {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif,audio/mp4, video/mp4",
            params:{
                user:store.get('user').id
            }
        };

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            addedfile: this.handleFileAdded.bind(this),
            processingmultiple:true,
            maxfilesexceeded:100,
            maxfilesreached:100,
            sendingmultiple:true,
            successmultiple: true,
            completemultiple: true,
            canceledmultiple: true,
        }

        return (
            <div>
                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig}/>
            </div>
        );
    }
}
