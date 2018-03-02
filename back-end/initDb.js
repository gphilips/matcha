import mysql from 'mysql';

const db = mysql.createConnection({
  	host     : 'localhost',
  	user     : 'root',
  	password : ''
});

function initDb() {
  db.connect(function(err) {
  	if (err)
  	{
  		throw err;
  		db.end();
    }
  	db.query("CREATE DATABASE IF NOT EXISTS db_matcha");
  	db.changeUser({database: 'db_matcha'}, function (err) {
  		if (err) throw err;
  	});
  	db.query(`CREATE TABLE IF NOT EXISTS users
          (firstName VARCHAR(255),
          lastName VARCHAR(255),
          email VARCHAR(255),
          password VARCHAR(255),
          token VARCHAR(255),
          available INTEGER(1),
          gender ENUM('male', 'female', 'both'),
          orientation ENUM('male', 'female', 'both'),
          birthday DATE,
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
