/*global module*/

var global = {
    "development": {
        sessionSecret: 'nyancat',
        mongodb: 'staruml:ibanez@ds043220.mongolab.com:43220/staruml',
        paypal: {
            business: "support-facilitator@staruml.io",
            form_url: "https://www.sandbox.paypal.com/cgi-bin/webscr",
            return_url: "http://143.248.56.174:3000/buy_success",
            notify_url: "http://143.248.56.174:3000/buy_ipn"
        },
        dir: {
            "views": '/views',
            "public": '/public'
        }
    },
    "production": {
        sessionSecret: 'nyannyannyan',
        mongodb: 'staruml:ibanez@ds043220.mongolab.com:43220/staruml',
        paypal: {
            business: "support@staruml.io",
            form_url: "https://www.paypal.com/cgi-bin/webscr",
            return_url: "http://staruml.io/buy_success",
            notify_url: "http://staruml.io/buy_ipn"
        },
        dir: {
            "views": '/views',
            "public": '/public'
        }
    }
};

module.exports = global;
