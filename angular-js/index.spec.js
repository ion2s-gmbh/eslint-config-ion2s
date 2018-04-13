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
