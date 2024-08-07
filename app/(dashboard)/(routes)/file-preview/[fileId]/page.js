"use client"
import React, { useEffect, useState } from 'react'
import { app } from '../../../../../firebaseConfig';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import FileInfo from './_components/Fileinfo'
import FileShareForm from './_components/FileShareForm'



function FilePreview({params}) {
    const db = getFirestore(app);
    const [file, SetFile]= useState();
    useEffect(()=>{
        console.log(params?.fileId);
        params?.fileId&&getFileInfo();
    },[])
    
    const getFileInfo=async()=>{
        const docRef = doc(db, "uploadedFile", params?.fileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            SetFile(docSnap.data());
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
    }

    const onPasswordSave=async(password)=>{
        const docRef = doc(db,"uploadedFile", params?.fileId);
        await updateDoc(docRef,{
            password:password
        });
    }


  return (
        <div className='m-4 md:m-10 p-4 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8'>
            
             <div className='w-full md:w-1/2'>
                <FileInfo file={file}/>
            </div>
            <div className='w-full md:w-1/2'>
                <FileShareForm file={file} 
                onPasswordSave={(password)=>onPasswordSave(password)}/>
            </div>
        </div>
    
  )
}

export default FilePreview