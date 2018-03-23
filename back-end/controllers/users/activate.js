import generalQuery from '../../models/generalQuery.js';

const activateUser = async (req, res) => {
    const { email, token } = req.body;

    if (email && token) {
        generalQuery.get('users', 'email', email, (user) => {
                if (user[0] && token === user[0].token) {
                    generalQuery.update('users', 'verify', true, user[0].username, (row) => {
                        return res.send({
                            success: true,
                            message: "Your account has been activated"
                        });
                    })
                }
                else {
                    res.send({
                        success: false,
                        message: "Your account didn't exist"
                    });
                }
            })
    }
    else {
        res.send({
            success: false,
            message: "Your email or token is not valid"
        });
    }
};

module.exports = activateUser;
