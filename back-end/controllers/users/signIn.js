import generalQuery from '../../models/generalQuery.js';
import { comparePassword } from '../../utils/checking.js';
import sendMail from '../../utils/sendMail.js';

const signIn = async (req, res) => {
    const { username, password } = req.body;
    generalQuery.get('users', 'username', username, (user) => {
        if (!user[0]) {
            return res.send({
              success: false,
              message: "Your accoun't hasn't been created.",
            });
        }
        else {
            comparePassword(password, user[0].password).then(checkPassword => {
                if (!checkPassword) {
                    return res.send({
                      success: false,
                      message: "Your password is wrong (8 alphanumeric characters minimum).",
                    });
                }
                else if (user[0].token) {
                    const subject = "Confirm your account";
                    const indication = "Please click this link to confirm your account :";
                    const link = `<a href="http://localhost:3000/activate?email=${email}&token=${user[0].token}">https://www.matcha.com/confirm</a>`;

                    sendMail(email, subject, indication, link);
                    return res.send({
                      success: false,
                      message: "Your account hasn't been confirmed. We have sent you an email to activate it.",
                    });
                }
                else {
                    return res.send({
                      success: true,
                      message: `Welcome ${user[0].firstName} !`
                    });
                }
            })
        }
    })
};

module.exports = signIn;
