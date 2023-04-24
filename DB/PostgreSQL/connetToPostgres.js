let { Client } = require("pg");


async function queryToPostgres(query) {

   let client = new Client({
      user: process.env.PostgresUser,
      host: process.env.PostgresHost,
      database: process.env.PostgresDatabase,
      password: process.env.PostgresPassword,
      port: parseInt(process.env.PostgresPort)
   });

   try {
      await client.connect();
      console.log("Query is successed");
      let result = await client.query(query)
      return result;
   } catch (err) {
      console.log("Error:", err);
   } finally {
      client.end();
   }
}


module.exports = queryToPostgres;