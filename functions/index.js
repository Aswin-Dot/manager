const admin = require("firebase-admin");
const functions = require("firebase-functions");

const createUser = require("./src/createUser");

const serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://manager-3ba61-default-rtdb.firebaseio.com",
});

exports.createUser = functions.https.onRequest(createUser);
