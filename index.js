var api_key = 'key-d956cf5597f0751aaac1d4593ad6b990';
var domain = 'sandboxae45f31018c7420aa1a8f72e463e52c8.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'pe_lias@msn.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
    console.log(body);
});