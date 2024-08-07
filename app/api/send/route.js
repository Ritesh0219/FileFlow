import { render } from '@react-email/components';
import sgMail from '@sendgrid/mail';
import { EmailTemplate } from '../../_components/EmailTemplate';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
    try {
        const response = await req.json();
        console.log(response);

        const recipientEmail = response.emailToSend;
        console.log('Email to send: ' + recipientEmail);

        // Render the React component to HTML
        const emailHtml = render(
            <EmailTemplate 
                userName={response.userName}
                emailToSend={response.emailToSend}
                fileName={response.fileName}
                fileSize={response.fileSize}
                fileType={response.fileType}
                fileUrl={response.fileUrl}
                
            />
        );

        const msg = {
          from: {
            email: 'riteshjadhav978@gmail.com',
            name: 'FileFlow' // Set the sender name here
        },
            to: recipientEmail,
            subject:' Shared a File With you',
            html: emailHtml, // Correct property name is 'html'
        };

        await sgMail.send(msg);
        console.log('Email sent');
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Error sending email', { status: 500 });
    }
}
