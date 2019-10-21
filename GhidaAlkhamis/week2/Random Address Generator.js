var streetNumber = ['76529', '12345', '56104', '25015']

var streetName = ['king Fahad', 'king salman', 'king abduallh', 'altakhassi']

var cityName = ['Riyadh', 'Dammam', 'Jeddah', 'Makkah']

var stateName = ['East State', 'South State','West State','Riyadh']

var zipCode = ['92745', '19463', '34684', '77284']

function Random(p1) {
    return p1[Math.floor((Math.random() * p1.length))];
}

function generateAdress() {
    return `${Random(streetNumber)} ${Random(streetName)} ${Random(cityName)} ${Random(stateName)} ${Random(zipCode)}`;
}

var address = generateAdress();
console.log(address);