'use client'
import React, { useEffect, useState } from 'react';
import { app } from '../../../firebaseConfig';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import FileItem from '../[fileId]/_components/FileItem';

function FileView({ params }) {
  const db = getFirestore(app);
  const [file, setFile] = useState(null); // Changed SetFile to setFile

  useEffect(() => {
    if (params.fileId) {
      getFileInfo();
    }
  }, [params.fileId]); // Added params.fileId to dependency array

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setFile(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen w-full'>
      {file ? (
        <FileItem file={file} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FileView;
