const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'ourAnimals';
const dbOps = require('./utils/dbOps');

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection("otters");

    dbOps.insertDocument(db, { image: "otters/2.jpg" },
        "otters", (result) => {
            console.log("Insert Document:\n", result.ops);

            dbOps.findDocuments(db, "otters", (docs) => {
                console.log("Found Documents:\n", docs);

                dbOps.updateDocument(db, { image: "otters/2.jpg" },
                    { description: "Updated Test" }, "otters",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dbOps.findDocuments(db, "otters", (docs) => {
                            console.log("Found Updated Documents:\n", docs);

                            db.dropCollection("otters", (result) => {
                                console.log("Dropped Collection: ", result);

                                client.close();
                            });
                        });
                    });
            });
    });



});
