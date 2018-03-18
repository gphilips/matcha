import generalQuery from '../../models/generalQuery.js';
import { db } from '../../initDb.js';

const getter = async (req, res) => {
    const table = req.params.table;
    const field = req.params.field;
    const value = req.query.value;

    generalQuery.get(table, field, value, (row) => {
        if (row) {
            res.send({
                success: true,
                message: `${value} has been found.`,
                data: row
            });
        }
        else {
            res.send({
                success: false,
                message: `Sorry but, ${value} doesn't exist.`,
            });
        }
    })
};

const getAll = (req, res) => {
    const table = req.params.table;

    generalQuery.getAll(table, (rows) => {
        if (rows) {
            res.status(200).send({
                success: true,
                message: `${table} has been found`,
                data: rows
            });
        }
        else {
            res.send({
                success: false,
                message: `Sorry but, there is no ${table} yet`
            });
        }
    })
};

module.exports = {
    getAll,
    getter
}
