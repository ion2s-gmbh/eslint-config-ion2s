const name = 'ion2s';

const test = {}; // a test object

const indent = {
    should: {
        be: {               // list of entries:
            four: [
                'one',      // first entry
                'two',      // second entry
                'three',    // third entry
                'four',     // fourth entry
            ],
        },
    },
    other: {
        alpha: 'alpha', // this is
        bravo: 'bravo', // also
        charlie: 'charlie', // okay
    },
};

test.method = function () {
    if (indent.should.be.four.length !== 4) return;

    return name;
};

test.print = function (str) {
    switch (str) {
        case 'shit':
            console.log('$#*!');
            break;
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 5:
            console.log('high-five');
            break;
        default:
            console.log(str);
    }
};
