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
            username VARCHAR(255),
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
            tags VARCHAR(255),
            bio TEXT,
            reported TEXT,
            blocked TEXT
        );`);

        dbQuery(`CREATE TABLE IF NOT EXISTS photos
                (id INTEGER AUTO_INCREMENT PRIMARY KEY,
                path VARCHAR(255),
                username VARCHAR(255)
        );`);

        dbQuery(`CREATE TABLE IF NOT EXISTS likes
                (id INTEGER AUTO_INCREMENT PRIMARY KEY,
                from_user VARCHAR(255),
                to_user VARCHAR(255)
        );`);
    });
}

module.exports = {
    db,
    initDb
};
