import * as User from'../models/users.js';
import errorsMsg from '../utils/checking.js';
import * as userQuery from '../dbAction/userQuery.js';


const register = async (req, res, next) => {
    const { username,
        password,
        passwordCfm,
        birthday,
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
        userQuery.getUser("username", username, function(user) {
            if (user)
            {
                return res.send({
                    success: false,
                    message: "This username is not available.",
                });
            }
            else {
                userQuery.getUser("email", email, function(user) {
                    if (user)
                    {
                        return res.send({
                            success: false,
                            message: "This email is already registered.",
                        });
                    }
                    else {
                        userQuery.createUser(req.body, function(result, msg) {
                            return res.send({
                                success: result,
                                message: msg
                            });
                        });
                    }
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

// export const update = (req, res) => {
//     User.findByIdAndUpdate({_id: req.params.id}, req.body).then((user) => {
//         User.findOne({_id: req.params.id}).then(function(err, user) {
//             if (err) throw err;
//             res.send(user);
//         });
//     });
// };
//
// export const remove = (req, res) => {
//     User.findByIdAndRemove({_id: req.params.id}).then((err, user) => {
//         if (err) throw err;
//         res.send(user);
//     });
// };

module.exports = register;
