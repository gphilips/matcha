import { UserQuery } from '../../models/userQuery.js';

const getAllUsers =  async (req, res) => {
    UserQuery.getUsers((err, data) => {
        return res.send(data);
    })
};

const getUser = async (req, res) => {
    UserQuery.getUser("username", req.params.username, (err, data) => {
        return res.status(200).send(data);
    })
};

module.exports = {
    getAllUsers,
    getUser
}
