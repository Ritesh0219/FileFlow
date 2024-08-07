"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '../../../../firebaseConfig'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs'
import { generateRandomString } from '../../../_utils/generateRandomString'
import { useRouter } from 'next/navigation'

// Function to convert file size
const convertFileSize = (sizeInBytes) => {
  const sizeInKB = sizeInBytes / 1024;
  const sizeInMB = sizeInKB / 1024;
  
  if (sizeInMB < 1) {
    // Return size in KB if less than 1 MB
    return `${Math.round(sizeInKB)} KB`;
  } else {
    // Return size in MB
    return `${(sizeInMB).toFixed(2)} MB`;
  }
}

function Upload() {
  const { user } = useUser();
  const [progress, setProgress] = useState();
  const router = useRouter();
  const storage = getStorage(app);
  const db = getFirestore(app);
  const [fileDocId, setFileDocId] = useState();
  
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };

    const storageRef = ref(storage, 'file-upload/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        setProgress(progress);

        if (progress === 100) {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            saveInfo(file, downloadURL);
          });
        }
      }
    );
  }

  const saveInfo = async (file, fileUrl) => {
    const docId = Date.now().toString();
    const fileSize = convertFileSize(file?.size || 0);

    await setDoc(doc(db, "uploadedFile", docId), {
      fileName: file?.name || 'unknown Name',
      fileSize: fileSize, // Use the converted file size here
      fileUrl: fileUrl || 'Unknown Url',
      fileId: docId,
      userEmail: user?.primaryEmailAddress.emailAddress,
      userName: user?.fullName,
      password: '',
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + 'f/' + docId
    });
    setFileDocId(docId);
  }

  useEffect(() => {
    if (fileDocId) {
      router.push('/file-preview/' + fileDocId);
    }
  }, [fileDocId, router]);

  return (
    <div className='p-5 px-8 md:px-28 mt-10'>
      <h2 className='text-[20px] text-center mt-10'>
        Start <strong className='text-primary'>Uploading</strong> Files and <strong className='text-primary'>Share</strong> it
      </h2>
      <UploadForm uploadBtnclick={(file) => uploadFile(file)} progress={progress} />
    </div>
  )
}

export default Upload;
