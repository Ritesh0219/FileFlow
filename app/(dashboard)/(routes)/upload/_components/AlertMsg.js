import React from 'react';

function AlertMsg({ msg, type }) {
  let bgColor, textColor;

  switch (type) {
    case 'success':
      bgColor = 'bg-primary'; // Green background for success
      textColor = 'text-white';
      break;
    case 'error':
      bgColor = 'bg-red-700'; // Red background for error
      textColor = 'text-white';
      break;
    case 'Email':
      bgColor = 'bg-green-600'; // Yellow background for warning
      textColor = 'text-white';
      break;
    default:
      bgColor = 'bg-gray-200'; // Default background color
      textColor = 'text-gray-800';
  }

  return (
    <div 
      className={`${bgColor} ${textColor} p-4 rounded-md mx-4 sm:mx-8 md:mx-12 lg:mx-auto lg:w-full lg:max-w-lg`} 
    >
      {msg}
    </div>
  );
}

export default AlertMsg;
