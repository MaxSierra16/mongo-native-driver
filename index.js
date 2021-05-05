const { MongoClient } = require("mongodb");
require("dotenv").config();

const { deleteManyDocs } = require("./functions");
const data = require("./data");

const { MONGO_URI: uri } = process.env;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async function main() {
  try {
    const connection = await client.connect();
    // await deleteManyDocs(client, { deuda: 0 });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
})();
