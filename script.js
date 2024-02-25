const charAmountRange = document.getElementById('charAmountRange')
const charAmountNumber = document.getElementById('charAmountNumber')
const includeUppercaseElement = document.getElementById('selectUpper')
const includeNumberElement = document.getElementById('selectNum')
const includeSymbolElement = document.getElementById('selectSymbol')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47)
.concat(arrayFromLowToHigh(58,64))
.concat(arrayFromLowToHigh(91,96))
.concat(arrayFromLowToHigh(123,126))

const passwordDisplay = document.getElementById('passwordDisplay')


charAmountRange.addEventListener('input',syncCharacterAmount)
charAmountNumber.addEventListener('input',syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    charAmountNumber.value = value
    charAmountRange.value = value
}

const form = document.getElementById('passwordGeneratorForm')
form.addEventListener('submit', e => {
    e.preventDefault()
    const charcterAmount = charAmountNumber.value
    const includeUpper = includeUppercaseElement.checked
    const includeNumbers = includeNumberElement.checked
    const includeSymbols = includeSymbolElement.checked
    const password = generatePassword(charcterAmount, includeUpper, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(charcterAmount, includeUpper, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    if(includeUpper) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    const passwordCharacters = []

    for(let i=0; i<charcterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))

    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for(let i=low; i<=high; i++) {
        array.push(i)
    }
    return array
}


