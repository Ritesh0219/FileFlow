import React, { useState, useEffect } from 'react';
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

function UploadForm({ uploadBtnclick, progress }) {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setShowSuccess(true);
      // Clear success message and reset file input after 3 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setFile(null); // Reset file state
        const fileInput = document.getElementById('dropzone-file');
        if (fileInput) fileInput.value = ''; // Reset file input
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [progress]);

  useEffect(() => {
    if (errorMsg) {
      // Set a timeout to hide error message after 3 seconds
      const timer = setTimeout(() => {
        setErrorMsg(null);
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [errorMsg]);

  const onFileSelect = (file) => {
    console.log(file);
    if (file && file.size > 10000000) {
      console.log('Size is greater than 10 MB');
      setErrorMsg('Maximum File Upload size is 10MB');
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };

  const handleUpload = () => {
    uploadBtnclick(file);
    setShowSuccess(false); // Hide the success message on new upload
  };

  return (
    <div className='mt-12 text-center'>
      <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-blue-800 dark:bg-blue-700 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-blue-500 dark:hover:bg-blue-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
              <svg className="w-10 h-10 mb-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to</span> <span className='text-primary font-semibold'>upload</span> or <span className='text-primary font-semibold'>drag</span> and <span className='text-primary font-semibold'>drop</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max Size 10 MB)</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={(event) => onFileSelect(event.target.files[0])} />
          </label>
        </div>
        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      </div>
      
      {errorMsg && (
        <div className="flex justify-center mt-4">
          <AlertMsg msg={errorMsg} type="error" />
        </div>
      )}
      {file && (
        <div className="flex justify-center mt-4">
          <FilePreview file={file} removeFile={() => setFile(null)} />
        </div>
      )}
      
      {progress > 0 && progress < 100 ? (
        <ProgressBar progress={progress} />
      ) : (
        <>
          {showSuccess && (
            <div className="flex justify-center mt-4">
              <AlertMsg msg="File uploaded successfully!" type="success" />
            </div>
          )}
          <button disabled={!file || progress > 0} className='p-2 bg-primary text-white w-[25%] rounded-lg mt-5 disabled:bg-gray-500 ' onClick={handleUpload}>
            Upload
          </button>
        </>
      )}
    </div>
  );
}

export default UploadForm;
