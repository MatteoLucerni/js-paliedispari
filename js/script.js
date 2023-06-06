console.log('JS OK');

// prendo gli elementi dal DOM (palindrom)
const userWord = document.getElementById('user-word');
const paliButton = document.getElementById('pali-button');
const paliTarget = document.getElementById('pali-target');
// (oddeven)
const userNumber = document.getElementById('user-number');
const userGuess = document.getElementById('user-guess');
const oddevenButton = document.getElementById('oddeven-button');
const oddevenTarget = document.getElementById('oddeven-taget');

// ! Logica per verifica Palindromia

// al click eseguo la funzione palindrom con il valore dell'utente come parametro 
paliButton.addEventListener('click', function(){
    isPalindrom(userWord.value);
});

// funzione per verificare se la aprola è palindroma 
function isPalindrom(word){
    console.log('---------------');

    let reversedWord = '';
    
    for(let i = word.length - 1; i >= 0; i--){
        let extractedLetter = word[i];
        reversedWord += extractedLetter;
    }

    console.log('Your word: ' + word)
    console.log('Reversed: '+ reversedWord);

    if(word === reversedWord){
        console.log('Your word is palindrome')
        paliTarget.innerHTML = `<h3 class="text-success">La tua parola è palindorma</h3>`
    } else {
        console.log('Your word is NOT palindrome')
        paliTarget.innerHTML = `<h3 class="text-danger">La tua parola NON è palindorma</h3>`
    }

    console.log('---------------');
};

// ! Logica per Pari/Dispari

// funzione per generare un numero randomico da un valore minimo a uno massimo inclusi
function randomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    console.log('CPU number: ' + randomNumber);
    return randomNumber;
}

// funzione per verificare se il numero inserito è pari
function isEven(number){
    let isEven = false;

    if (number % 2 === 0) isEven = true;

    console.log(number + ' is even? ' + isEven);
    return isEven;
}

// sommo i due numeri 
const sum = parseInt(userNumber.value) + randomNumber(1, 5);
console.log('sum: ' + sum);

if(userGuess.value === 'PARI' && isEven(sum) || userGuess.value === 'DISPARI' && !isEven(sum)){
    console.log('YOU WON');
    oddevenTarget.innerHTML = `<h3 class="text-success">Hai vinto! La somma era: ${sum}</h3>`
} else{
    console.log('LOSE');
    oddevenTarget.innerHTML = `<h3 class="text-danger">Hai perso! La somma era: ${sum}</h3>`
}