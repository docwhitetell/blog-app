import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import store from 'store'

import styles from './style.less'

const toolbarConfig={
    inline: { inDropdown: true },
    list: { inDropdown: true },
    textAlign: { inDropdown: true },
    link: { inDropdown: true },
    history: { inDropdown: true },
    image: {
        defaultSize: {
            height: 'auto',
            width: '100%',
        },
    },
}
/*
function upload(file) {
    const res=new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://www.gitbase.com/api/file/upload');
            //xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
            const data = new FormData();
            data.append('image', file);
            data.append('user', store.get('user').id);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        }
    );
    console.log(res)
    return res
}
*/


const MyEditor=(props)=> {
        return (
            <div>
                <Editor
                        wrapperClassName={styles.wrapper}
                        toolbarClassName={styles.toolbar}
                        editorClassName={styles.editor}
                        toolbar={toolbarConfig}
                        {...props}
                    />
            </div>
        );

}
export default MyEditor