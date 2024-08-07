
import * as React from 'react';

export const EmailTemplate = ({
  userName,
  emailToSend,
  fileName,
  fileSize,
  fileType,
  fileUrl
}) => (
  <div>
    <h4>File Name: {fileName}</h4>
    <h4>File Size: {fileSize}</h4>
    <h4>File URL: {fileUrl}</h4>
    <h4>© 2024 | FileFlow, Pune,INDIA
    </h4>
  </div>
);
