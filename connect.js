var mysql = require("mysql");
var fs = require("fs");

const addVolunteer = (name, mobile, email, dob, location, category) => {
  const options = {
    host: "35.222.87.221", //IP address of my Cloud SQL Server
    user: "root",
    password: "TOHacks",
    database: "takeAstep",
    ssl: {
      ca: fs.readFileSync("server-ca.pem"),
      cert: fs.readFileSync("client-cert.pem"),
      key: fs.readFileSync("client-key.pem"),
    },
  };

  var conn = mysql.createConnection(options);
  conn.connect();

  conn.query(
    `INSERT INTO volunteer VALUES ${name}, ${mobile}, ${email}, ${dob}, ${location}, ${category}`,
    function () {
      console.log(`${name} added`);
    }
  );

  conn.end();
};

const addNGO = (name, location, category) => {
  const options = {
    host: "35.222.87.221", //IP address of my Cloud SQL Server
    user: "root",
    password: "TOHacks",
    database: "takeAstep",
    ssl: {
      ca: fs.readFileSync("server-ca.pem"),
      cert: fs.readFileSync("client-cert.pem"),
      key: fs.readFileSync("client-key.pem"),
    },
  };

  var conn = mysql.createConnection(options);
  conn.connect();

  conn.query(
    `INSERT INTO volunteer VALUES ${name}, ${location}, ${category}`,
    function () {
      console.log(`${name} added`);
    }
  );

  conn.end();
};

const getNGO = (category) => {
  const options = {
    host: "35.222.87.221", //IP address of my Cloud SQL Server
    user: "root",
    password: "TOHacks",
    database: "takeAstep",
    ssl: {
      ca: fs.readFileSync("server-ca.pem"),
      cert: fs.readFileSync("client-cert.pem"),
      key: fs.readFileSync("client-key.pem"),
    },
  };

  var conn = mysql.createConnection(options);
  conn.connect();

  conn.query(
    `SELECT name FROM NGO where category = "${category}"`,
    function (err, rows, fields) {
      console.log(rows);
    }
  );

  conn.end();
};

const getVolunteer = (category) => {
  const options = {
    host: "35.222.87.221", //IP address of my Cloud SQL Server
    user: "root",
    password: "TOHacks",
    database: "takeAstep",
    ssl: {
      ca: fs.readFileSync("server-ca.pem"),
      cert: fs.readFileSync("client-cert.pem"),
      key: fs.readFileSync("client-key.pem"),
    },
  };

  var conn = mysql.createConnection(options);
  conn.connect();

  conn.query(
    `SELECT name FROM volunteer where category = "${category}"`,
    function (err, rows, fields) {
      console.log(rows);
    }
  );

  conn.end();
};

getNGO("Covid Help");
