const twilio = require("twilio");

const accoundSid = "AC61dc68ff075c457a7008dfe81856247b";
const authToken = "c176e6ef00b2aa4ce853323b86964f0a";

module.exports = new twilio.Twilio(accoundSid, authToken);
