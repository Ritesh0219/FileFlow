import React from 'react';

function AlertMsg({ msg, type, className }) {
  let bgColor, textColor;

  switch (type) {
    case 'success':
      bgColor = 'bg-green-200'; // Green background for success
      textColor = 'text-green-700';
      break;
    case 'error':
      bgColor = 'bg-red-200'; // Red background for error
      textColor = 'text-red-700';
      break;
    case 'Email':
      bgColor = 'bg-yellow-200'; // Yellow background for warnings
      textColor = 'text-yellow-700';
      break;
    default:
      bgColor = 'bg-gray-200'; // Default background color
      textColor = 'text-gray-800';
  }

  return (
    <div 
      className={`${bgColor} ${textColor} p-4 rounded-md ${className}`} 
    >
      {msg}
    </div>
  );
}

export default AlertMsg;
