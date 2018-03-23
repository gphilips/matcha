import mysql from 'mysql';
import { db } from '../initDb.js';

const get = (table, field, value, callback) => {
    try {
        const sql = `SELECT * FROM ${table} WHERE ${field} = ?`;
        db.query(sql, value, (err, row) => {
            if (err) throw err;
            callback(row);
        })
    } catch(err) {
        console.error('Cannot connect to the database db_matcha.\n');
    }
};

const getAll = (table, callback) => {
    try {
        const sql = `SELECT * FROM ${table}`;
        db.query(sql, (err, rows) => {
            if (err) throw err;
            callback(rows);
        })
    } catch(err) {
        console.error('Cannot connect to the database db_matcha.\n');
    }
}

const insert = (table, userData, callback) => {
    try {
        const sql = `INSERT INTO ${table} SET ?`;
        db.query(sql, userData, (err, data) => {
            if (err) throw err;
            callback(data);
        })
    } catch(err) {
        console.error('Cannot connect to the database db_matcha.\n', err);
    }
};

const update = (table, field, value, username, callback) => {
    try {
        const sql = `UPDATE ${table} SET ${field} = ? WHERE username = ?`;
        db.query(sql, [value, username], (err, row) => {
            if (err) throw err;
            callback(row);
        })
    } catch(err) {
        console.error('Cannot connect to the database db_matcha.\n');
    }
};

const deleter = (table, field, value, callback) => {
    try {
        const sql = `DELETE FROM ${table} WHERE ${field} = ?`;
        db.query(sql, value, (err, row) => {
            if (err) throw err;
            callback(row);
        })
    } catch(err) {
        console.error('Cannot connect to the database db_matcha.\n');
    }
};

module.exports = { get, getAll, insert, update, deleter};
