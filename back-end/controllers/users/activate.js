import generalQuery from '../../models/generalQuery.js';
import { createToken } from '../../utils/crypt.js';

const activateUser = async (req, res) => {
    const { email, confirmToken } = req.body;

    if (email && confirmToken) {
        const user = await generalQuery.get({table: 'users', field: 'email', value: email});

        if (user[0] && confirmToken === user[0].confirmToken) {
            const token = await createToken(user[0]);
            const fields = ['activated', 'confirmToken', 'token', 'connected'];
            const values = [1, '', token, true];

            for (let key in fields) {
                generalQuery.update({ table: 'users', field : fields[key], value: values[key], username: user[0].username });
            }

            return res.send({
                success: true,
                message: "Your account has been activated",
                userData : user[0]
            });
        }
        else if (user[0].activated === 1) {
            res.send({
                success: false,
                message: "Your account is already activated",
                userData : ''
            });
        }
        else {
            res.send({
                success: false,
                message: "Your account doesn't exist",
                userData : ''
            });
        }
    }
    else {
        res.send({
            success: false,
            message: "Your email or token is not valid",
            userData : ''
        });
    }
};

module.exports = activateUser;
