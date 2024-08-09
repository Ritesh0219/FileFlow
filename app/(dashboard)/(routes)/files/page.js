'use client'
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { app } from '../../../../firebaseConfig';
import { useUser } from '@clerk/clerk-react';

// Initialize Firestore
const db = getFirestore(app);

function Files() {
  const { user, isLoaded, isSignedIn } = useUser(); // Use Clerk's useUser hook
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      if (!isLoaded) {
        // User data not loaded yet
        return;
      }

      if (!isSignedIn || !user || !user.emailAddresses.length) {
        // User not signed in or no email addresses
        setError('User not authenticated');
        setLoading(false);
        return;
      }

      try {
        // Get the current user's email
        const userEmail = user.emailAddresses[0].emailAddress;

        // Query Firestore with a filter
        const filesRef = collection(db, 'uploadedFile');
        const q = query(filesRef, where('userEmail', '==', userEmail));
        const querySnapshot = await getDocs(q);

        const fileList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFiles(fileList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch files if the user is loaded
    fetchFiles();
  }, [isLoaded, isSignedIn, user]); // Re-run effect when user or its state changes

  const handleDelete = async (fileId) => {
    try {
      // Reference to the document to delete
      const fileDocRef = doc(db, 'uploadedFile', fileId);

      // Delete the document
      await deleteDoc(fileDocRef);

      // Update the state to remove the deleted file from the list
      setFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
    } catch (err) {
      setError('Failed to delete the file.');
    }
  };

  if (!isLoaded) {
    return <p>Loading user data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!isSignedIn) {
    return <p>User not authenticated</p>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center text-xs sm:text-sm md:text-base w-1/4">File Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center text-xs sm:text-sm md:text-base w-1/4">File Size</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center text-xs sm:text-sm md:text-base w-1/4">View Files</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center text-xs sm:text-sm md:text-base w-1/4">Delete Files</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {files.length > 0 ? (
              files.map(file => (
                <tr key={file.id}>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-900 text-center text-xs sm:text-sm md:text-base truncate">{file.fileName || 'N/A'}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center text-xs sm:text-sm md:text-base truncate">{file.fileSize || 'N/A'}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-xs sm:text-sm md:text-base">
                    <a
                      href={file.shortUrl}  // Change the link to your file's URL or a specific route
                      className='bg-primary hover:bg-secondary text-white px-6 py-2 rounded-md'
                     
                    >
                      View
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-xs sm:text-sm md:text-base">
                    <button
                      onClick={() => handleDelete(file.id)}
                      className='bg-red-600 hover:bg-red-800 text-white px-5 py-2 rounded-md'
                      
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))
            ) : (
              <tr>
                <td colSpan="4" className="whitespace-nowrap px-4 py-2 text-center text-gray-700 text-xs sm:text-sm md:text-base">No files found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Files;
