var nodemailer = require("nodemailer");
var http = require('http');

var MailCtrl = {

    scrapePage: function() {
        var options = {
          host: url,
          port: 80,
          path: '/resource?id=foo&bar=baz',
          method: 'POST'
        };

        http.request(options, function(res) {
          console.log('STATUS: ' + res.statusCode);
          console.log('HEADERS: ' + JSON.stringify(res.headers));
          res.setEncoding('utf8');
          res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
          });
        }).end();
    }

    sendEmail: function() {

        // create reusable transport method (opens pool of SMTP connections)
        var smtpTransport = nodemailer.createTransport("SMTP",{
            service: "Mailgun",
            auth: {
                user: "postmaster@mg.haberdash.co",
                pass: "2hiv5v-fq6y7"
            }
        });

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: "Everpress ✔ <team@everpress.co.uk>", // sender address
            to: "shaunchurch@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world ✔", // plaintext body
            html: "<b>Hello world ✔</b>" // html body
        }

        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }

            // if you don't want to use this transport object anymore, uncomment following line
            //smtpTransport.close(); // shut down the connection pool, no more messages
        });

    }

}

module.exports = MailCtrl;