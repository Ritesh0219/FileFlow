import React from 'react';
import { X } from 'lucide-react';

function FilePreview({ file, removeFile }) {

  const fileSizeKB = (file?.size / 1024).toFixed(2);
  const fileSizeMB = (file?.size / (1024 * 1024)).toFixed(2);


  const displaySize = fileSizeMB >= 1 ? `${fileSizeMB} MB` : `${fileSizeKB} KB`;

  return (
    <div className="flex gap-1 items-center justify-center border bg-gray-100 hover:bg-blue-200 p-2 rounded-md mt-">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-14 h-16"
      >
        <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
        <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
      </svg>

      <div className='flex flex-col items-start'>
        <h2 className='font-semibold'>{file.name}</h2>
        <p className='text-sm text-gray-500'>{file?.type}</p>
        <p className='text-sm text-gray-500'>{displaySize}</p>
      </div>
      <X className='ml-8 mb-9 text-gray-500 hover:text-black cursor-pointer ' onClick={()=>removeFile()}/>
    </div>
  );
}

export default FilePreview;
