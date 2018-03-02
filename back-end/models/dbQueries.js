import { db } from '../initDb.js';

function dbQuery(req) {
	db.connect(function(err) {
		if (err)
		{
			throw err;
			db.end();
		}
		db.query(req, function (err, result) {
	    if (err)
			{
				console.error(err);
				db.end();
			}
			return (result);
	  });
	});
}

module.exports = {
	dbQuery
};
