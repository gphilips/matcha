import sendmail from 'sendmail';

function sendMail(userData, html) {
    sendmail({
        from: 'no-reply@matcha.com',
        to: userData.email,
        subject: 'Confirm your account',
        html
        }, (err, reply) => {
            console.log(err && err.stack);
            console.dir(reply);
        }
    );
};

module.exports = { sendMail };
