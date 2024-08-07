import React from 'react'

function ProgressBar({progress=40}) {
  return (
    <div className="flex justify-center mt-3">
      <div className="bg-gray-400 h-5 rounded-md text-[10px] text-white font-bold flex flex-col justify-center items-center" style={{ width: '700px' }}>
        <div
          className="bg-primary h-5 rounded-md"
          style={{ width: `${progress}%`, padding: '0.2px' }}
        >
          <div className='mt-0.5'>
          {`${Number(progress).toFixed(0)}%`}
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default ProgressBar