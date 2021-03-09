import React, { useState, useEffect } from 'react';
import api from '../services/userService'
import {Label,Button,Wrapper } from '../style/files_upload.js';
import CreateTree from '../TreeStructure/Tree'
export default function FilesUpload()
{

    // const [ selectedFile,SetselectedFile]=useState(null);
    const [ selectedFiles,SetselectedFiles]=useState(null);
    const [ directory,SetDirectory]=useState("");
    // const AllFiles=[];
    const [AllFiles,SetAllFiles]=useState([])

    var TreeFiles = new Array()
    
    useEffect(()=>{
        // window.alert("hello")
        async function CreateFiles(directory)
         {
              api.GetAllFiles("/mimshakim/").then(res => { 
                    // console.log(res.data.data)
                    if(AllFiles.length==0)
                    
                    SetAllFiles(AllFiles => [...AllFiles, res.data.data])
                    // JSON.stringify(AllFiles, null, 4)
                    // AllFiles.push(res.data.data)
                    //  console.log("Effecr");
                    //  console.log(JSON.stringify(AllFiles))
                    // console.log("AllFIles")
                    //  console.log(AllFiles[0])
             })
          
         }
        //  if(AllFiles.length==0)
        CreateFiles();
     },[directory, AllFiles])


    // const handleFile = async () => {
    //     const data = new FormData() 
    //     data.append('dataFile', selectedFile)
    //     await api.FileUpload(data).then(res => {

    //         window.alert(res.data.message+ " status: "+res.status)  
    //    })
    //    .catch(error => {  
    //        var response =JSON.stringify(error.response.data.error)
    //        window.alert(response+ " status: "+error.response.status);
                 
    //    })
    // }
    
    const handleFiles = async () => {
        const data = new FormData()
        if(selectedFiles!==null)
        {
            for(var x = 0; x<selectedFiles.length; x++) {
                data.append('dataFiles', selectedFiles[x])
            }
        }
        else
        {
            data.append('dataFiles', selectedFiles)
        }
        await api.FilesUpload(data,directory).then(res => {

            window.alert(res.data.message+ " status: "+res.status)  
       })
       .catch(error => {  
           var response =JSON.stringify(error.response.data.error)
           window.alert(response+ " status: "+error.response.status);
                 
       })
    }
    
//    const  onChangeInputFile= event=>{
//         // event.target.files
//         SetselectedFile(event.target.files[0])
//         console.log(event.target.files[0])
    
//     }
    const  onChangeInputFiles= event=>{
        // event.target.files
        SetDirectory("/")

        if(maxSelectFile(event) && checkFileSize(event))
        SetselectedFiles(event.target.files)
        // console.log(event.target.files)
    
    }

    const maxSelectFile= event=>{
        let files = event.target.files // create file object
            if (files.length > 5) { 
               const msg = 'Only 5 files can be uploaded at a time'
               event.target.value = null // discard selected file
               window.alert(msg)
              return false;
     
          }
        return true;
     
     }

     const checkFileSize= event=>{
        let files = event.target.files
        //size in bytes
        let size = 1000000
        let err = ""; 
        for(var x = 0; x<files.length; x++) {
        if (files[x].size > size) {
         err += files[x].type+'is too large, please pick a smaller file\n';
       }
     };
     if (err !== '') {
        event.target.value = null
        window.alert(err)
        return false
   }
   
   return true;
   
   }

    return (
        <Wrapper>
       
        {/* <label>Select your file:</label>
        <input type="file" name="dataFile" onChange={onChangeInputFile}/>
        <button type="button" class="btn btn-success btn-block" onClick={handleFile}>Upload</button>  */}
        

      
        <Label>Select your files:</Label>
        <input type="file" name="dataFiles" multiple onChange={onChangeInputFiles}/>
        <Button type="button" onClick={handleFiles}>Upload</Button> 
      

        {/* {JSON.stringify(AllFiles, null, 4)} */}
        {console.log("AllFiles are:",AllFiles)}
       {/* { TreeFiles = new Array()} */}

        {AllFiles.length==0 ? console.log("hello"): CreateTree(AllFiles[0])}
       </Wrapper>

    )
    
}