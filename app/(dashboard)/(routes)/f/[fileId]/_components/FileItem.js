import {FileDown } from 'lucide-react';
import React, { useState } from 'react';

function FileItem({ file }) {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true); // Example default value, adjust as needed

  // Function to handle the file download
  const handleDownload = () => {
    // Check if the entered password is correct
    if (!file.password || password === file.password) { // No password required or correct password
      // Start file download
      const link = document.createElement('a');
      link.href = file.fileUrl; // Actual file URL or path
      link.download = file.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setIsPasswordCorrect(false); // Set to false if password is incorrect
    }
  };

  return (
    <div className='bg-white flex flex-col gap-5 p-6 items-center justify-center rounded-lg shadow-2xl max-w-md mx-auto mx-2'>
      <div className='flex flex-col gap-2 items-center'>
      <img src='/logo.svg' alt='Logo' style={{width:'50px'}} />

        <h1 className='text-3xl font-semibold text-gray-800 md:text-4xl mt-2'>
          <span className='text-primary'>Download</span> your file here
        </h1>
        <h6 className='text-base text-gray-500 font-medium md:text-lg'>
          Find file details below
        </h6>
      </div>
      <FileDown className='w-20 h-20 text-primary' />
      <div className='w-full max-w-xs'>
        <h6 className='text-gray-700 mb-2'> File name : {file.fileName}</h6>
        <h6 className='text-gray-700 mb-2'> File Size : {file.fileSize}</h6>
        {file.password && ( // Only show password field if file requires a password
          <>
            <input
              type='password'
              placeholder='Enter password'
              className='p-2 outline-none mt-2 border border-gray-300 rounded-md w-full'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isPasswordCorrect && (
              <p className='text-red-600 text-sm mt-2'>Incorrect password. Please try again.</p>
            )}
          </>
        )}
      </div>
      <button
        onClick={handleDownload}
        className='bg-primary text-white p-2 px-6 w-full rounded-md hover:bg-blue-800 transition-colors'
      >
        Download
      </button>
    </div>
  );
}

export default FileItem;
