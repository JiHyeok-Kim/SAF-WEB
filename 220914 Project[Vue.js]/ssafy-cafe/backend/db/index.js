const mysql = require("mysql2/promise");

const pool = mysql.createPool({
	// aws ip
	host: "43.200.103.43",
	// mysql username
	user: "hoggyy",
	// mysql user password
	password: "(2842kiki)",
	// db name
	database: "order_system",
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = { pool };
