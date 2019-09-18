function pigIt(str) {
    const alpabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlpabet = alpabet.toUpperCase();
    const alpabetList = (alpabet + upperAlpabet).split('');

    const result = str.split(' ').map(word => {
        if (word.split('').every(v => alpabetList.includes(v))) {
            return word.substring(1) + word[0] + 'ay'
        }
        return word.substring(1) + word[0]
    }).join(' ')

    return result;
}

pigIt('Pig latin is cool')
pigIt('Hello world !')