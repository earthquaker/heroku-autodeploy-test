// Inspiration from (for future reference):
// http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js

var api_key = 'key-d956cf5597f0751aaac1d4593ad6b990';
var domain = 'sandboxae45f31018c7420aa1a8f72e463e52c8.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
    from: 'Tival <no-reply@tival.se>',
    to: 'salmin89@hotmail.com',
    subject: 'Tival orderbekräftelse',
    text: '<b>Här kommer din orderbekräftelse.</b>'
};

mailgun.messages().send(data, function (error, body) {
    console.log(body);
});