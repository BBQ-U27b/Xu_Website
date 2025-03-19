const mysql = require('mysql2');
const fs = require('fs');

// Database connection with SSL
const db = mysql.createConnection({
  host: 'u27.bbq.withgentlent.com',  // Your database host
  user: 'xu',                       // Your database username
  password: 'TSO3kM0JS/EUb+kA',      // Your database password
  database: 'xu_click_tracker',      // Your database name
  ssl: {
    ca: fs.readFileSync(__dirname + '/../certs/ca-cert.pem'),
    cert: fs.readFileSync(__dirname + '/../certs/client-cert.pem'),
    key: fs.readFileSync(__dirname + '/../certs/client-key.pem')
  }
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
