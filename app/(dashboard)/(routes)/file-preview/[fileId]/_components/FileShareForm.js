import { Copy } from 'lucide-react';
import React, { useState } from 'react';
import GlobalApi from '../../../../../_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import AlertMsg from '../../../upload/_components/AlertMsg'; // Adjust the import path according to your file structure

function FileShareForm({ file, onPasswordSave }) {
    const [isPasswordEnable, setIsPasswordEnable] = useState(false);
    const [password, setPassword] = useState('');
    const [copySuccess, setCopySuccess] = useState('');
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({ msg: '', type: '' }); // State for custom alerts
    const { user } = useUser();

    const sendEmail = async () => {
        if (!email) {
            setAlert({ msg: 'Email is required', type: 'Email' });
            return;
        }

        const data = {
            emailToSend: email,
            userName: user?.fullName,
            fileName: file.fileName,
            fileSize: file.fileSize,
            fileType: file.fileType,
            fileUrl: file.fileUrl,
        };

        try {
            const response = await GlobalApi.sendEmail(data);
            console.log(response);
            setAlert({ msg: 'Email sent successfully!', type: 'success' });
            setEmail(''); // Clear the email input after sending
        } catch (error) {
            console.error('Error sending email:', error);
            setAlert({ msg: 'Failed to send email. Please try again.', type: 'error' });
        }
    };

    // Handle copy to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(file.shortUrl)
            .then(() => {
                setCopySuccess('Copied!');
                setTimeout(() => setCopySuccess(''), 1000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                setCopySuccess('Failed to copy!');
            });
    };

    return file && (
        <div className='flex flex-col gap-4 p-4 md:p-6'>
            {/* Display Custom Alert */}
            {alert.msg && <AlertMsg msg={alert.msg} type={alert.type} />}

            {/* Short URL Section */}
            <div className='flex flex-col gap-2'>
                <label className='text-sm text-gray-500'>Short URL</label>
                <div className='flex items-center gap-3 md:gap-4 p-2 rounded-lg border border'>
                    <input
                        type='text'
                        value={file.shortUrl}
                        disabled
                        className='bg-transparent p-1 border-none rounded-md flex-grow text-gray-700'
                    />
                    {copySuccess && (
                        <div className='text-green-500 text-sm font-semibold'>
                            {copySuccess}
                        </div>
                    )}
                    <button
                        onClick={handleCopy}
                        className='text-gray-400 hover:text-gray-700'
                        aria-label='Copy URL'
                    >
                        <Copy />
                    </button>
                </div>
            </div>

            {/* Enable Password Section */}
            <div className='flex items-center gap-2'>
                <input
                    type='checkbox'
                    checked={isPasswordEnable}
                    onChange={() => setIsPasswordEnable(prev => !prev)}
                    className='w-5 h-5'
                />
                <label className='text-sm font-semibold text-gray-700'>Enable Password?</label>
            </div>

            {/* Password Input */}
            {isPasswordEnable && (
                <div className='flex flex-col md:flex-row gap-2 items-center'>
                    <div className='border w-full p-1 rounded-lg'>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-transparent p-2 rounded-md w-full md:w-2/3 outline-none'
                        />
                    </div>
                    <button
                        onClick={() => onPasswordSave(password)}
                        className='border p-2.5 bg-green-600 text-white rounded-md mt-2 md:mt-0 md:ml-2 hover:bg-green-700'
                        style={{ width: '100px' }}
                    >
                        Save
                    </button>
                </div>
            )}

            <div>
                <label className='text-sm text-gray-500'>Send File to Email</label>
                <div className='flex items-center gap-3 md:gap-4 p-2 rounded-lg border border mt-2'>
                    <input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-transparent p-1 rounded-md flex-grow text-gray-700 outline-none'
                        placeholder='Email'
                    />
                </div>
            </div>

            <button
                className='bg-primary p-2 rounded-lg text-white hover:bg-blue-700'
                onClick={sendEmail}
            >
                Send
            </button>
        </div>
    );
}

export default FileShareForm;
