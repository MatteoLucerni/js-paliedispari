# Parole palindrome

- Salvo la parola dell'utente
- Creo una funzione che ha come parametro la parola dell'utente:
    - Divido la parola dell'utente in lettere singole
    - **FINO A CHE** non  raggiungo la lunghezza  della parola:
        - Prendo l'ultima lettera della parola inserita
        - La elimino dalla parola inserita
        - La metto in una nuova parola e la salvo
    - **SE** la nuova parola è uguale alla parola iniziale:
        - La parola dell'utente è palindroma
    - **ALTRIMENTI**:
        - Non palindroma


# Pari o dispari

- Chiedo all'utente se pari o dispari e un numero da 1 a 5 e li salvo
- Creo una funzione che genera un numero randomico da 1 a 5
- Creo una funzione che stabilisce se il numero è pari:
        - **SE** la somma dividendola per 2 da resto 0:
        - Salvo risultato come pari
    - **ALTRIMENTI**:
        - Salvo risultato come dispari
- Sommo il numero dell'utente con quello generato
- Controllo tramite la funzione se il risultato è pari o dispari
- Controllo se l'utente ha vinto in base ha cosa ha inserito:
    - **SE** l'utente ha messo pari **E** il risultato è pari **O** l'utente ha messo dispari **E** il risultato è dispari:
        -  L'utente ha vinto
    - **ALTRIMENTI**:
        -  L'utente ha perso
