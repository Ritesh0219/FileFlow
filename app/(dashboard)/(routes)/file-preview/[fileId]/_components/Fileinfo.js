import { SquareArrowLeft } from 'lucide-react';
import React from 'react'
import { useEffect , useState } from 'react';


function Fileinfo({file}) {
    const [fileType, setFileType] = useState();
    useEffect(()=>{
        if(file?.fileType){
            const type = file.fileType.split('/')[0];
            setFileType(type);
        }
        
    },[file])
  return file&&(
    <>
    <div className='flex gap-1 text-primary ml-4'>
        
        <a href="/upload" className='text-primary hover:underline flex gap-1'> 
            <SquareArrowLeft/> 
            <strong>Go to upload</strong>
        </a>
    </div>
    <div className=' text-center border flex justify-center m-4 r p-2 rounded-lg border-blue-200'>
        <div className='flex flex-col items-center justify-center' style={{height:'250px'}}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-14 h-16"
            >
            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
            <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
            <h2>{file.fileName}</h2>
            <h2 className='text-gray-400 text-[13px]'>{file.fileType}</h2>
        </div>
    </div>
    </>
  )
}

export default Fileinfo