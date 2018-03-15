import mysql from 'mysql';
import { db } from '../initDb.js';

const getUsers = (callback) => {
    if (db) {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, rows) => {
            if (err) throw err;
            else {
                if (rows) {
                    callback(null, {
                        success: true,
                        message: "Users has been found",
                        data: rows
                    });
                }
                else {
                    callback(null, {
                        success: false,
                        message: "There is no user registered yet"
                    });
                }
            }
        })
    }
    else
        console.errors('Cannot connect to the database db_matcha.');
};

const getUser = (field, value, callback) => {
    if (db) {
        const sql = `SELECT * FROM users WHERE ${field} = ?`;
        db.query(sql, value, (err, row) => {
            if (err) throw err;
            else {
                if (row) {
                    callback(null, {
                        success: true,
                        message: "The user already exist.",
                        data: row
                    });
                }
                else {
                    callback(null, {
                        success: false,
                        message: "The user doesn't exist.",
                    });
                }
            }
        })
    }
    else
        console.errors('Cannot connect to the database db_matcha.');
};

const insertUser = (userData, callback) => {
    if (db) {
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, userData, (err, result) => {
            if (err) throw err;
            else {
                callback(null, {
                    success: true,
                    message: "Your account has been successfully created. An email has been sent to confirm your account.",
                    data: userData
                });
            }
        })
    }
    else
        console.errors('Cannot connect to the database db_matcha.');
};

const updateUser = (field, userData, callback) => {
    if (db) {
        const sql = `UPDATE users SET
                    ${field} = ${db.escape(userData)}
                    WHERE id = ${userData.id};
                    `;
        db.query(sql, userData, (err, result) => {
            if (err) throw err;
            else {
                if (result) {
                    callback(null, {
                        success: true,
                        message: 'The changes has been made.'
                    });
                }
                else {
                    callback(null, {
                        success: false,
                        message: 'Sorry, but the changes has not been made. We cannot find the user.'
                    });
                }
            }
        })
    }
    else
        console.errors('Cannot connect to the database db_matcha.');
};
module.exports = {
    getUsers,
    getUser,
    insertUser,
    updateUser
}
