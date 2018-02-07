const accountSID = process.env.TWILIO_SID
const authToken = process.env.TWILIO_TOKEN

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: process.env.JOHNS_NUMBER,
    from: process.env.TWILIO_PHONE,
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then(message => console.log(message.sid));
