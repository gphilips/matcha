import randtoken from 'rand-token';
import ipInfo from 'ipInfo';
import errorsMsg from '../../utils/checking.js';
import { hashPwd } from '../../utils/hashPwd.js';
import { sendMail } from '../../utils/sendMail.js';
import { getLocation } from '../../utils/geolocation.js';
import userQuery from '../../models/userQuery.js';

const createUser = async (req, res) => {
    let {
        password,
        passwordCfm,
        birthday,
        firstName,
        lastName,
        email,
        gender,
        orientation
    } = req.body;

    if (!password || !passwordCfm || !birthday
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
        userQuery.getUser("email", email, (err, user) => {
            if (user.data.length == 0)
            {
                const token = randtoken.generate(50);
                let lat;
                let lng;
                ipInfo((err, cLoc) => {
                    if (!err) {
                      const loc = cLoc.loc.split(',');
                      lat = parseFloat(loc[0]);
                      lng = parseFloat(loc[1]);
                    }
                    else {
                      lat = 0;
                      lng = 0;
                    }
                })
                password = hashPwd(password);
                const userData = {
                    password,
                    birthday,
                    firstName,
                    lastName,
                    email,
                    gender,
                    orientation,
                    token,
                    location : {lat, lng}
                };

                userQuery.insertUser(userData, (err, data) => {
                    if (data) {
                        sendMail(userData,
                            `Your account has been successfully registered.\n
                            Click on this link to confirm your account :\n
                            http://localhost:3000/auth/${token} `);
                        return res.status(200).send(data);
                    }
                });
            }
            else {
                return res.send({
                    message: "This email is already registered.",
                    user
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

module.exports = { createUser };
