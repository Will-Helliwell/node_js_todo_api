# pern_todo

## Learnings

- express + express.json()
- cors
- [exporting and importing](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
- [Shorthand way to initialise variables from object properties](https://stackoverflow.com/questions/33798717/javascript-es6-const-with-curly-braces)
- async vs defer
- async (req, res)
- async / await vs callbacks

- pg - https://www.npmjs.com/package/pg
  - a package that has lots of features for interfacing NodeJS and PostgreSQL
  - First step is to require the package and destructure the client and pool objects - these are the 2 ways you can connect to the database. If your application is using the database very frequently, the pool will be a better option than using a single client. 
  - Second - create a new Pool instance and configure with information specific to your database that you have created separately in PostgreSQL: user, localhost, port, database ( = db name), password (if password protected).
  - Third - query your pool using the .query method. await pool_instance.query("sql statement", [bind_param_1, bind_param_2] (err,res) => {}). You can also not pass the final callback function and instead return the result object, then do what you want with the result object (as I have done here). Nb - parameterize your queries to avoid sql injection. This returns a result object, which has: rows, fields, command, rowCount.



- sql - returning - available in PostgreSQL and Oracle, can return specified columns of inserted/updated/deleted rows, thus avoiding having to retrive these details using another select statement.

