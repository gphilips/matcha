import bcrypt from 'bcryptjs';
import moment from 'moment';

const errorsMsg = async (req) => {
    let errors = [];

    let errUsername = await checkUsername(req);
    if (errUsername != '')
        errors.push(errUsername);
    let errPassword = await checkPassword(req);
    if (errPassword != '')
        errors.push(errPassword);
    let errBirth = await checkBirth(req);
    if (errBirth != '')
        errors.push(errBirth);
    let errName = await checkName(req);
    if (errName != '')
        errors.push(errName);
    let errEmail = await checkEmail(req);
    if (errEmail != '')
        errors.push(errEmail);
    let errGender = await checkGender(req);
    if (errGender != '')
        errors.push(errGender);
    let errOrientation = await checkOrientation(req);
    if (errOrientation != '')
        errors.push(errOrientation);
    return (errors);
};

const checkUsername = (req) => {
    let { username } = req.body;
    let error = '';

    if (!username.match(/^[a-z0-9]{8,20}$/))
        error = "Your username must have 8 to 20 alphanumeric characters.";
    return error;
};

const checkPassword = (req) => {
    let { password, passwordCfm } = req.body;
    let error = '';

    if (!password.match(/^[a-z0-9]{8,255}$/i))
        error = "Your password must have 8 alphanumeric characters minimum.";
    else if (password != passwordCfm)
        error = "Passwords are not the same.";
    return error;
};

const checkBirth = (req) => {
    let birthday = moment(req.body.birthday, "DD/MM/YYYY");
    let age = moment().diff(birthday, 'years');
    let error = '';

    if (!moment(birthday).isValid() || age > 150)
        error = "Your birthday is not valid.";
    else if (age < 18)
        error = "Sorry, but you must be over 18 to register.";
    return error;
};

const checkName = (req) => {
    let { firstName, lastName } = req.body;
    let error = '';

    if (!firstName.match(/^[-a-z' ]+$/i) || !lastName.match(/^[-a-z' ]+$/i))
        error = "Your name is not valid.";
    return error;
};

const checkEmail = (req) => {
    let email = req.body.email;
    let error = '';

    if (!email.match(/^[-a-z0-9_]+@[-a-z0-9_]+\.[a-z]{2,3}$/))
        error = "Your email is not valid.";
    return error;
};

const checkGender = (req) => {
    let gender = req.body.gender;
    let error = '';

    if (gender != 'male' && gender != 'female' && gender != 'both')
      error = "Your gender is not valid.";
    return error;
};

const checkOrientation = (req) => {
    let orientation = req.body.orientation;
    let error = '';

    if (orientation != 'male' && orientation != 'female' && orientation != 'both')
      error = "Your orientation is not valid.";
    return error;
};


const comparePassword = (oldPassword, password) => {
  try {
    return bcrypt.compareSync(password, oldPassword);
  } catch (err) {
    console.error('Error: ', err)
    return null;
  }
};

module.exports = errorsMsg;
