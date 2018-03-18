import mysql from 'mysql';

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});

function dbQuery(req) {
    db.query(req, (err, result) => {
        if (err)
    		{
    			console.error(err);
    			db.end();
    		}
    	return (result);
    });
}

function initDb() {
    db.connect((err) => {
        if (err)
        {
        	console.error('SQL Error:', err);
        	db.end();
        }
        dbQuery("CREATE DATABASE IF NOT EXISTS db_matcha");
        db.changeUser({database: 'db_matcha'}, (err) => {
        	if (err) throw err;
        });
        dbQuery(`CREATE TABLE IF NOT EXISTS users
            (id INTEGER AUTO_INCREMENT PRIMARY KEY,
            firstName VARCHAR(255),
            lastName VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255),
            token VARCHAR(255),
            gender ENUM('male', 'female', 'both'),
            orientation ENUM('straight', 'gay', 'both'),
            birthday DATE,
            location VARCHAR(255),
            available INTEGER(1),
            avatar VARCHAR(255),
            bio TEXT,
            matching LONGTEXT
        );`);
    });
}

module.exports = {
    db,
    initDb
};
