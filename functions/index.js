async function createOneDoc(client, newEntry) {
  const result = await client
    .db("test")
    .collection("clientes")
    .insertOne(newEntry);

  const { insertedCount, insertedId } = result;
  console.log(`Inserted ${insertedCount} with id: ${insertedId}`);
}

async function createManyDocs(client, newEntries) {
  const results = await client
    .db("test")
    .collection("clientes")
    .insertMany(newEntries);

  const { insertedCount, insertedIds } = results;
  console.log(`Inserted ${insertedCount} with ids:`);
  console.log(insertedIds);
}

async function findOneDoc(client, compareObject) {
  const result = await client
    .db("test")
    .collection("clientes")
    .findOne(compareObject);

  if (!result) {
    console.log("Nothing found!");
    return;
  }

  console.log(result);
}

async function findManyDocs(client, compareObject) {
  const results = await client
    .db("test")
    .collection("clientes")
    .find(compareObject);

  if (!results) {
    console.log("Nothing found!");
    return;
  }

  console.log(`Found ${await results.count()} result(s)`);
  console.log(await results.toArray());
}

async function updateOneDoc(client, compareObj, updateObj) {
  const result = await client
    .db("test")
    .collection("clientes")
    .updateOne(compareObj, updateObj);

  const { modifiedCount, matchedCount } = result;
  console.log(`Found ${matchedCount} match and modified ${modifiedCount}`);
}

async function upsertOneDoc(client, compareObj, updateObj) {
  const result = await client
    .db("test")
    .collection("clientes")
    .updateOne(compareObj, updateObj, { upsert: true });

  const { modifiedCount, matchedCount, upsertedId } = result;

  if (!matchedCount) {
    console.log(`Inserted item with ID: ${upsertedId._id}`);
  } else {
    console.log(`Found ${matchedCount} match and modified ${modifiedCount}`);
  }
}

async function updateManyDocs(client, compareObj, updateObj) {
  const results = await client
    .db("test")
    .collection("clientes")
    .updateMany(compareObj, updateObj);

  const { modifiedCount, matchedCount } = results;
  console.log(`Found ${matchedCount} match and modified ${modifiedCount}`);
}

async function deleteOneDoc(client, compareObj) {
  const result = await client
    .db("test")
    .collection("clientes")
    .deleteOne(compareObj);

  const { deletedCount } = result;

  if (!deletedCount) {
    return console.log("No doc matched the query");
  }

  console.log(`${deletedCount} doc(s) deleted!`);
}

async function deleteManyDocs(client, compareObj) {
  const results = await client
    .db("test")
    .collection("clientes")
    .deleteMany(compareObj);

  const { deletedCount } = results;

  if (!deletedCount) {
    return console.log("No doc matched the query");
  }

  console.log(`${deletedCount} doc(s) deleted!`);
}

module.exports = {
  createOneDoc,
  createManyDocs,
  findOneDoc,
  findManyDocs,
  updateOneDoc,
  upsertOneDoc,
  updateManyDocs,
  deleteOneDoc,
  deleteManyDocs,
};
