const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const numbers = ['0', '1', '2', '3' , '4', '5', '6', '7', '8', '9']
const mixed = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9"]


const generateEl = document.getElementById('generate')
const leftEl = document.getElementById('left-password')
const rightEl = document.getElementById('right-password')

let lengthEl 
let typeEl 
let passwordLength 
let typePassword 


generateEl.addEventListener('click', function() {

    lengthEl = document.getElementById('num-input')    
    typeEl = document.getElementById('type-of-password')
    passwordLength = Number(lengthEl.value)
    typePassword = typeEl.value

    console.log(typePassword)

    const password1 = generatePassword()
    leftEl.textContent = password1

    const password2 = generatePassword()
    rightEl.textContent = password2

})


function generatePassword() {
    let password = ''
    let typeArray 

    if (typePassword === 'all') {
        typeArray = characters
    } else if (typePassword === 'number') {
        typeArray = numbers
    } else {
        typeArray = mixed
    }
    

    for (let i=0; i<passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * typeArray.length)
        let randomCharater = typeArray[randomNumber]
        password += randomCharater
    }

    return password
}


