const admin = require("firebase-admin");
const {Expo} = require("expo-server-sdk");

// Create a new Expo SDK client
// optionally providing an access token if you have enabled push security
let expo = new Expo({accessToken: process.env.EXPO_ACCESS_TOKEN});

// Create the messages that you want to send to clients
let messages = [];
for (let pushToken of somePushTokens) {
  // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]

  // Check that all your push tokens appear to be valid Expo push tokens
  if (!Expo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid Expo push token`);
    continue;
  }

  // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
  messages.push({
    to: pushToken,
    sound: "default",
    body: "This is a test notification",
    data: {withSome: "data"},
  })
}