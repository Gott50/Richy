module.exports = function (param) {
    var income = param.gehalt;
    var out = "";
    var monthly
    var duration
    var interest
    var amount


    if (income >= 5000) {
        interest = 1.99
    } else {
    }
    if (income >= 4000) {
        interest = 3.99
    } else {
        if (income >= 3000) {
            interest = 5.99
        }

    }
    // Monatsrate=Kreditsumme*(Nominalzins/12)/(1-(1+Nominalzins/12)^Laufzeit
    monthly = amount * (interest / 12) / (1 - (1 + Math.pow(interest / 12), duration));

    if (monthly > income) {
        out = 'Wenn Du nicht mehr bei Mama und Papa wohnst, würden wir Dir nicht empfehlen das Angebot anzunehmen.'
    } else {
        if (monthly > income - 1000) {
            out = 'Wenn Du mehr essen willst, als Brot und Wasser, würden wir Dir empfehlen die Raten zu verringern.'
        }
        else {
            out = 'Wir haben ein tolles Angebot für Dich mit nur ' + interest + '% Zinsen. Du zahlst ' + duration + ' monatliche Raten a ' + monthly+
            ' EUR.'

        }
    }

    return {
        speech: out,
        data: {}
    }
}
