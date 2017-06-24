module.exports = function (param) {
    console.log("Parameter", param);
    var income = param.Gehalt;
    var out = "";
    var monthly
    var duration = param.Laufzeit.amount;
    var effectiveInterest;
    var durationUnit = param.Laufzeit.unit ? param.Laufzeit.unit : "monat";
    if (durationUnit != 'monat') {
        duration = duration / 12;
    }
    var nominalInterest;
    var amount = param.Kreditsumme;

    if (income >= 5000) {
        nominalInterest = 1.96
        effectiveInterest = '1,99'
    } else {
    }
    if (income >= 4000) {
        nominalInterest = 3.90
        effectiveInterest = '3,99'
    } else {
        if (income >= 3000) {
            nominalInterest = 5.8
            effectiveInterest = '5,99'
        }

        else {
            nominalInterest = 5.8
            effectiveInterest = '5,99'
        }
    }
// Monatsrate=Kreditsumme(Nominalzins/12)/(1-(1+Nominalzins/12)^-Laufzeit
    monthly = (-1)*amount*(nominalInterest / 12/100) / (1 -  Math.pow((1 +nominalInterest / 12/100), -duration));

    if (duration < 12) {
        out = 'Weniger als 12 Monate? Dann warte doch noch ein wenig.'
    }
    else {
        if (duration > 84) {
            out = 'Viel zu lang, so lange wollen wir nicht auf das Geld warten. Maximal 84 Monate.'
        }
    }
    if (amount < 2500) {
        if (out == '') {
            out = 'So wenig? Bei weniger als 2500 Ocken bieten unsere Konten Dir ein tolles Dispo an. '
        }
        else {
            out = out + 'Und ausserdem: Bei so einer kleinen Summe, kannst Du Deine Omi fragen'
        }
    }

    if (amount > 50000) {

        if (out == '') {
            out = 'Boah, das ist ganz schön viel Geld, kontaktier uns über einen Oldschoolweg. '
        }
        else {
            out = out + 'Und ausserdem: Bei so einer großen Summe, schau mal bei uns vorbei.'
        }
    }

    if (out != '') {
        out = out + ' PS: '
    }

    if (income < 1000) {
        out = out + 'Du brauchst mindestens 1000 Euro, um bei uns einen Kredit zu bekommen.'
    } else {
        if (monthly > income) {
            out = out + 'Wenn Du nicht mehr bei Mama und Papa wohnst, würden wir Dir nicht empfehlen das Angebot anzunehmen.'
        } else {
            if (monthly > income - 1000) {
                out = out + 'Wenn Du mehr essen willst, als Brot und Wasser, würden wir Dir empfehlen die Raten zu verringern.'
            }
            else {
                out = 'Wir haben ein tolles Angebot für Dich mit nur ' + nominalInterest + '% Zinsen ('
                    + effectiveInterest + '%effektiv Zins). Du zahlst ' + duration + ' monatliche Raten a ' + Math.round(monthly) +
                    ' EUR.'

            }
        }
    }

    return {
        speech: out,
        data: {}
    }
}