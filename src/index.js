const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbol = '';
    let array = [];
    let result = '';
    for (let i = 0; i < expr.length / 10; i++) {
        array.push(expr.slice(i * 10, (i + 1) * 10));
    }
    for (let i = 0; i < array.length; i++) {
        symbol = '';
        if (array[i] == '**********') {
            symbol += ' ';
        }
        for (let j = 0; j < array[i].length; j++) {
            let desh = array[i][j] + array[i][j + 1] == 11;
            let point = array[i][j] + array[i][j + 1] == 10;
            if (desh) {
                symbol += '-';
                j++;
            }
            if (point) {
                symbol += '.';
                j++;
            }
        }
        if (symbol == ' ') {
            result += symbol;
        } else {
            result += MORSE_TABLE[symbol];
        }

    }
    return result;
}

module.exports = {
    decode
}