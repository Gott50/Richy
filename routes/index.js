var express = require('express');
var router = express.Router();
var calculate = require("./calculate");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hook', function (req, res) {
    try {
        var speech = 'empty speech';
        var data = 'empty data';
        if (req.body) {
            var request = req.body;
            console.log(request);

            if (request.result) {
                speech = '';
                data = {};

                if (request.result.fulfillment) {
                    speech += request.result.fulfillment.speech;
                    speech += ' ';
                }

                if (request.result.action === "getCredit") {
                    var out = calculate(requestBody.result.parameters);
                    if (out) {
                        data = {
                            calculate: out.data,
                        };
                        speech = out.speech;
                    }
                }
            }

            else if (request.result.action)
                speech += 'action: ' + request.result.action;
        }
    }

    return res.json({
        speech: speech,
        displayText: speech,
        data: data,
        source: 'Richy Calculator'
    });
});

module.exports = router;
