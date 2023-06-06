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