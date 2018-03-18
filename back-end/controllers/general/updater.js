import generalQuery from '../../models/generalQuery.js';
import { db } from '../../initDb.js';

const updater = async (req, res) => {
    const table = req.params.table;
    const field = req.params.field;
    const value = req.query.value;
    const id = req.query.id;

    generalQuery.update(table, field, value, id, (row) => {
        if (row.affectedRows > 0) {
            res.status(200).send({
                success: true,
                message: `Your change has been updated.`,
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

module.exports = updater;