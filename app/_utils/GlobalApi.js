const axios = require('axios'); // Use require or import consistently

const sendEmail = (data) => {
    return axios.post('/api/send', data)
        .catch(error => {
            console.error('Error sending email through API:', error);
            throw error; // Rethrow the error to be handled in the component
        });
};

module.exports = {
    sendEmail
};
