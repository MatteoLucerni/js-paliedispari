console.log('JS OK');

// prendo gli elementi dal DOM
const userWord = document.getElementById('user-word');
const paliButton = document.getElementById('pali-button');
const paliTarget = document.getElementById('pali-target');

paliButton.addEventListener('click', function(){
    isPalindrom(userWord.value);
});

function isPalindrom(word){

    let reversedWord = '';
    
    for(let i = word.length - 1; i >= 0; i--){
        const splittedWord = word.split('');
        let extractedLetter = splittedWord[i];
        reversedWord += extractedLetter;
        splittedWord.pop(extractedLetter)
    }

    console.log('Your word: ' + word)
    console.log('Reversed: '+ reversedWord);

    if(word == reversedWord){
        paliTarget.innerHTML = `<h3 class="text-success">La tua parola è palindorma</h3>`
    } else {
        paliTarget.innerHTML = `<h3 class="text-danger">La tua parola NON è palindorma</h3>`
    }

}

