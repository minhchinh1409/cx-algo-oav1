function isUpperCase (character) {
    if (character.match(/^[A-Z]/)) {
        return true 
    } else {
        return false
    }
}

function howManyCamelCase (str) {
    var words = 1

    for (i = 0; i < str.length; i++) {
        if(isUpperCase(str.charAt(i))) {
            words += 1
        }
    }
    return words
}
console.log(howManyCamelCase('eatSleepPlayWork'))

