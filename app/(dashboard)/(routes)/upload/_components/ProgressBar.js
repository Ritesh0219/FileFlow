import React from 'react';

function ProgressBar({ progress = 0 }) {
  // Ensure progress is a number between 0 and 100
  const validProgress = Math.max(0, Math.min(100, progress));
  
  // Format the progress to a whole number for display
  const formattedProgress = Math.round(validProgress);

  return (
    <div className="flex justify-center mt-5 ">
      <div className="relative w-full max-w-xs">
        <span id="ProgressLabel" className="sr-only">Loading</span>

        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow={formattedProgress}
          aria-valuemin="0"
          aria-valuemax="100"
          className="relative block rounded-full bg-gray-200"
        >
          <span
            className="absolute inset-0 flex items-center justify-center text-xs text-white"
            style={{ width: `${formattedProgress}%` }}
          >
          </span>

          <span
            className="block h-4 rounded-full bg-primary"
            style={{ width: `${formattedProgress}%` }}
          ></span>
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
