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

        dbQuery(`CREATE TABLE IF NOT EXISTS \`users\` (
        	\`id\` INT NOT NULL AUTO_INCREMENT,
        	\`username\` varchar(255) UNIQUE,
        	\`firstName\` varchar(255) NOT NULL,
        	\`lastName\` varchar(255) NOT NULL,
        	\`email\` varchar(255) NOT NULL UNIQUE,
        	\`password\` varchar(255) NOT NULL,
        	\`confirmToken\` varchar(255),
        	\`token\` varchar(255) UNIQUE,
        	\`activated\` BOOLEAN NOT NULL DEFAULT '0',
        	\`gender\` varchar(255) NOT NULL,
        	\`orientation\` varchar(255) NOT NULL,
        	\`birthday\` DATE NOT NULL,
        	\`location\` varchar(255),
        	\`connected\` BOOLEAN NOT NULL DEFAULT '0',
        	\`lastConnection\` varchar(255),
        	\`popularity\` INT NOT NULL DEFAULT '0',
        	\`avatar\` varchar(255) NOT NULL DEFAULT 'https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg',
        	\`bio\` varchar(255),
        	PRIMARY KEY (\`id\`)
        );`)

        dbQuery(`CREATE TABLE IF NOT EXISTS \`likes\` (
        	\`id\` INT NOT NULL AUTO_INCREMENT,
        	\`like\` varchar(255) NOT NULL,
        	\`likedBy\` varchar(255) NOT NULL,
        	PRIMARY KEY (\`id\`),
            CONSTRAINT \`likes_fk0\` FOREIGN KEY (\`likedBy\`) REFERENCES \`Users\`(\`username\`)
        );`)

        dbQuery(`CREATE TABLE IF NOT EXISTS \`photos\` (
        	\`id\` INT NOT NULL AUTO_INCREMENT,
        	\`photo\` varchar(255) NOT NULL,
        	\`photoBy\` varchar(255) NOT NULL,
        	PRIMARY KEY (\`id\`),
            CONSTRAINT \`photos_fk0\` FOREIGN KEY (\`photoBy\`) REFERENCES \`Users\`(\`username\`)
        );`)

        dbQuery(`CREATE TABLE IF NOT EXISTS \`visits\` (
        	\`id\` INT NOT NULL AUTO_INCREMENT,
        	\`visit\` varchar(255) NOT NULL,
        	\`visitedBy\` varchar(255) NOT NULL,
            \`date\` varchar(255) NOT NULL,
        	PRIMARY KEY (\`id\`),
            CONSTRAINT \`visits_fk0\` FOREIGN KEY (\`visitedBy\`) REFERENCES \`Users\`(\`username\`)
        );`)

        dbQuery(`CREATE TABLE IF NOT EXISTS \`tags\` (
        	\`id\` INT NOT NULL AUTO_INCREMENT,
        	\`tag\` varchar(255) NOT NULL,
        	\`taggedBy\` varchar(255) NOT NULL,
        	PRIMARY KEY (\`id\`),
            CONSTRAINT \`tags_fk0\` FOREIGN KEY (\`taggedBy\`) REFERENCES \`Users\`(\`username\`)
        );`)

        dbQuery(`CREATE TABLE IF NOT EXISTS \`blocks\` (
        	\`id\` INT NOT NULL AUTO_INCREMENT,
        	\`block\` varchar(255) NOT NULL,
        	\`blockedBy\` varchar(255) NOT NULL,
        	PRIMARY KEY (\`id\`),
            CONSTRAINT \`blocks_fk0\` FOREIGN KEY (\`blockedBy\`) REFERENCES \`Users\`(\`username\`)
        );`)

        dbQuery(`CREATE TABLE IF NOT EXISTS \`reports\` (
        	\`id\` INT NOT NULL AUTO_INCREMENT,
        	\`report\` varchar(255) NOT NULL,
        	\`reportedBy\` varchar(255) NOT NULL,
        	PRIMARY KEY (\`id\`),
            CONSTRAINT \`reports_fk0\` FOREIGN KEY (\`reportedBy\`) REFERENCES \`Users\`(\`username\`)
        );`)

        dbQuery(`CREATE TABLE IF NOT EXISTS \`messages\` (
        	\`id\` INT NOT NULL AUTO_INCREMENT,
        	\`message\` varchar(255) NOT NULL,
        	\`messageBy\` varchar(255) NOT NULL,
        	\`messageTo\` varchar(255) NOT NULL,
        	PRIMARY KEY (\`id\`),
            CONSTRAINT \`messages_fk0\` FOREIGN KEY (\`messageBy\`) REFERENCES \`Users\`(\`username\`)
        );`)

    });
}

module.exports = {
    db,
    initDb
};
