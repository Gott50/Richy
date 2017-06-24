module.exports = function (param) {
    console.log("Parameter", param);
    var income = param.Gehalt;
    var out = "";
    var monthly
    var duration = param.Laufzeit.amount;
    var effectiveInterest;
    var durationUnit = param.unit ? param.unit : "monat";
    if (durationUnit != 'monat') {
        duration = duration / 12;
    }
    var nominalInterest;
    var amount = param.Kreditsumme;


    if (income >= 5000) {
        nominalInterest = 1.96
        effectiveInterest='1,99'
    } else {
    }
    if (income >= 4000) {
        nominalInterest = 3.90
        effectiveInterest ='3,99'
    } else {
        if (income >= 3000) {
            nominalInterest = 5.8
            effectiveInterest= '5,99'
        }

    }
    // Monatsrate=Kreditsumme*(Nominalzins/12)/(1-(1+Nominalzins/12)^Laufzeit 
    monthly = amount * (nominalInterest / 12) / (1 - (1 + Math.pow(nominalInterest / 12), duration));

    if (monthly > income) {
        out = 'Wenn Du nicht mehr bei Mama und Papa wohnst, würden wir Dir nicht empfehlen das Angebot anzunehmen.'
    } else {
        if (monthly > income - 1000) {
            out = 'Wenn Du mehr essen willst, als Brot und Wasser, würden wir Dir empfehlen die Raten zu verringern.'
        }
        else {
            out = 'Wir haben ein tolles Angebot für Dich mit nur ' + nominalInterest + '% Zinsen ('+effectiveInterest+'%effektiv Zins). Du zahlst ' + duration + ' monatliche Raten a ' + monthly +
                ' EUR.'

        }
    }

    return {
        speech: out,
        data: {}
    }
}
