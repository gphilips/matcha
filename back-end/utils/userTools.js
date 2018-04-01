import generalQuery from '../models/generalQuery';

const getUserData = async (field, value) => {
    const user = await generalQuery.get({table: 'users', field, value});
    return user[0];
}

const removeConfidentials = (user, username) => {
    if (user.username !== username)
        delete user.email;
    delete user.password;
    return user;
}

module.exports = {
    getUserData,
    removeConfidentials
}
