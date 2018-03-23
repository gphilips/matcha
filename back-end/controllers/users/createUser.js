import randtoken from 'rand-token';
import ipInfo from 'ipInfo';
import { errorsMsg } from '../../utils/checking.js';
import { hashPwd } from '../../utils/hashPwd.js';
import sendMail from '../../utils/sendMail.js';
import getLocation from '../../utils/geolocation.js';
import generalQuery from '../../models/generalQuery.js';

const createUser = async (req, res) => {
    let {
        password,
        passwordCfm,
        birthday,
        username,
        firstName,
        lastName,
        email,
        gender,
        orientation
    } = req.body;

    if (!username || !password || !passwordCfm || !birthday
        || !firstName || !lastName || !email || !gender || !orientation)
    {
        return res.send({
          success: false,
          message: "All fields must be completed."
        });
    }

    let errors = await errorsMsg(req);

    if (!errors[0])
    {
        generalQuery.get('users', 'username', username, (user) => {
            if (!user[0]) {
                const token = randtoken.generate(50);
                const userData = {
                    username,
                    password: hashPwd(password),
                    birthday,
                    firstName,
                    lastName,
                    email,
                    gender,
                    orientation,
                    token
                };

                generalQuery.insert('users', userData, (data) => {
                    if (data.affectedRows > 0) {
                        const subject = "Confirm your account";
                        const indication = "Please click this link to confirm your account :";
                        const link = `<a href="http://localhost:3000/activate?email=${email}&token=${token}">https://www.matcha.com/confirm</a>`;

                        sendMail(email, subject, indication, link);
                        res.status(200).send({
                            success: true,
                            message: "Your account has been successfully created.\n An email has been sent to confirm your account.",
                            data: userData
                        });
                    }
                    else
                        console.error("Something went wrong with the function generalQuery.insert().");
                });
            }
            else if (user[0]) {
                return res.send({
                    success: false,
                    message: "This email is already registered.",
                    user
                });
            }
            else {
                return res.send({
                    success: false,
                    message: "Sorry but, there is an error with the query",
                });
            }
        });
    }
    else {
        return res.send({
          success: false,
          message: errors
        });
    }
};

module.exports = createUser;
