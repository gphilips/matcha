import bcrypt from 'bcryptjs';

function hashPwd(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

module.exports = { hashPwd };
