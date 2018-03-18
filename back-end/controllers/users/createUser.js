import randtoken from 'rand-token';
import ipInfo from 'ipInfo';
import errorsMsg from '../../utils/checking.js';
import { hashPwd } from '../../utils/hashPwd.js';
import { sendMail } from '../../utils/sendMail.js';
import getLocation from '../../utils/geolocation.js';
import generalQuery from '../../models/generalQuery.js';

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
        // ipInfo((err, cLoc, {lat,lng}) => {
        //     if (!err) {
        //       const loc = cLoc.loc.split(',');
        //       lat = parseFloat(loc[0]);
        //       lng = parseFloat(loc[1]);
        //     }
        //     else {
        //       lat = 0;
        //       lng = 0;
        //     }
        //     console.log(lat, lng)
        // })

        generalQuery.get('users', 'email', email, (user) => {
            if (!user[0])
            {
                const token = randtoken.generate(50);
                const location = JSON.stringify(req.body.location);
                const userData = {
                    password: hashPwd(password),
                    birthday,
                    firstName,
                    lastName,
                    email,
                    gender,
                    orientation,
                    token,
                    location
                };

                generalQuery.insert('users', userData, (data) => {
                    if (data.affectedRows > 0) {
                        sendMail(userData,
                            `Your account has been successfully registered.\n
                            Click on this link to confirm your account :\n
                            http://localhost:3000/auth/${token} `);
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
