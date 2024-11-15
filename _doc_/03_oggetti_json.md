[⬅️ [TORNA ALL'INDICE] ](../README.md)

# Manipolazione di Oggetti JSON

## Metodi Principali
JavaScript fornisce due metodi fondamentali per la manipolazione di JSON:

1. `JSON.parse()`: 
   - Converte una stringa JSON in un oggetto JavaScript
   - Verifica automaticamente la validità del JSON
   - Converte i tipi di dati appropriatamente (numeri, booleani, null)
   - Lancia eccezioni se il JSON non è valido

2. `JSON.stringify()`:
   - Converte un oggetto JavaScript in una stringa JSON
   - Gestisce automaticamente l'escape dei caratteri speciali
   - Supporta la formattazione per maggiore leggibilità
   - Può escludere valori undefined

## 1. Parsing di JSON
```javascript
// Stringa JSON di partenza
const jsonString = '{"nome":"Mario","età":25,"città":"Roma"}';

// Conversione in oggetto JavaScript
const persona = JSON.parse(jsonString);

console.log(persona.nome);  // Output: Mario
console.log(persona.età);   // Output: 25
```

### Analisi del Parsing
Il parsing JSON è fondamentale quando:
- Si ricevono dati da un'API, cioè quando si ricevono dati formattati in JSON da una funzione di libreria.
- Si leggono file di configurazione
- Si recuperano dati dallo storage local
- Si processano stringhe JSON ricevute dal client o dal server 

Con il parsing si ha automaticamente:
1. Accesso diretto alle proprietà dell'oggetto usando la dot notation
2. Conversione automatica dei tipi di dato
3. Validazione della sintassi JSON
4. Possibilità di ottenere un oggetto in memoria, eventualmente da modificare e ritrasformare in JSON

## 2. Creazione di JSON
```javascript
// Oggetto JavaScript di partenza
const corso = {
    nome: "Informatica",
    studenti: ["Mario", "Laura"],
    attivo: true
};

// Conversione base in stringa JSON
const jsonString = JSON.stringify(corso);

// Conversione con formattazione
console.log(jsonString);
```

### Utilizzo della Serializzazione
La serializzazione in JSON è essenziale per:
1. Invio di dati a un'API
2. Salvataggio nello Storage locale
3. Creazione di file di configurazione


## 3. Manipolazione di Oggetti JSON
```javascript
// Oggetto complesso con struttura nidificata
const scuola = {
    nome: "Marconi-Hack",
    corsi: {
        informatica: {
            studenti: 25,
            aule: ["Lab1", "Lab2"]
        }
    }
};

// Operazioni sull'oggetto
console.log(scuola.corsi.informatica.studenti);
scuola.corsi.informatica.studenti = 30;
scuola.corsi.informatica.docente = "Prof. Rossi";
delete scuola.corsi.informatica.aule;
```

### Analisi dell'Esempio di Manipolazione

L'esempio mostra le quattro operazioni fondamentali che si possono eseguire su un oggetto JSON:

1. **Lettura di valori nidificati**
   Nell'esempio, `scuola.corsi.informatica.studenti` mostra come accedere a un valore profondamente nidificato usando la dot notation. Questa operazione:
   - Attraversa la gerarchia dell'oggetto
   - Restituisce il valore finale (25)
   - È sicura se tutti i livelli esistono
   - Potrebbe generare errori se un livello intermedio non esiste

2. **Modifica di valori esistenti**
   Con `scuola.corsi.informatica.studenti = 30` modifichiamo un valore esistente:
   - Il percorso deve esistere
   - Il nuovo valore sostituisce completamente il precedente
   - Non c'è bisogno di ricreare l'intera struttura
   - La modifica è immediata in memoria

3. **Aggiunta di nuove proprietà**
   `scuola.corsi.informatica.docente = "Prof. Rossi"` dimostra come aggiungere nuove proprietà:
   - Si può aggiungere a qualsiasi livello della gerarchia
   - Non serve preallocare spazio
   - La proprietà viene creata se non esiste
   - L'oggetto si espande dinamicamente

4. **Eliminazione di proprietà**
   `delete scuola.corsi.informatica.aule` mostra come rimuovere una proprietà:
   - L'operatore delete rimuove completamente la proprietà
   - Lo spazio viene liberato
   - L'accesso successivo restituirà undefined
   - La struttura dell'oggetto viene mantenuta

Questo esempio è particolarmente rilevante perché mostra:
- Come gestire strutture dati complesse
- Le operazioni CRUD (Create, Read, Update, Delete) su JSON
- La flessibilità degli oggetti JavaScript
- La gestione della memoria dinamica


## 4. Gestione degli Errori
```javascript
try {
    const invalidJson = '{"nome": "Mario", età: 25}';
    const obj = JSON.parse(invalidJson);
} catch (error) {
    console.error("Errore nel parsing JSON:", error.message);
}
```
Nell'esempio il JSON non è valido perchè la chiave *età* non è riportata con le virgolette. Eseguendo questo codice javascipt da terminale, si visualizzerà l'errore di formattazione.

Possiamo sfruttare questa tecnica per scrivere una nostra funzione che controlla se una stringa è correttamente formattata in JSON:
```javascript
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}
```

### Strategie di Gestione Errori
La gestione degli errori nel parsing JSON è cruciale per:

1. **Robustezza dell'Applicazione**
   - Prevenzione crash dell'applicazione
   - Gestione input utente invalido
   - Recovery da errori di rete

2. **Debugging**
   - Messaggi di errore dettagliati
   - Logging degli errori
   - Tracciamento problemi

3. **Validazione**
   - Verifica formato JSON
   - Controllo tipi di dato

## 5. Operazioni su Collections
```javascript
const studenti = [
    { id: 1, nome: "Mario", voti: [8, 7, 9] },
    { id: 2, nome: "Laura", voti: [9, 9, 8] }
];

const nomiStudenti = studenti.map(s => s.nome);
const studentiBravi = studenti.filter(s => 
    s.voti.reduce((accumulatore, valore) => accumulatore + valore, 0) / s.voti.length >= 8.5
);
```

### Analisi dell'Esempio Collections

L'esempio mostra come manipolare una collezione di dati JSON utilizzando i metodi funzionali di JavaScript. Analizziamo ogni parte:

1. **Struttura dei Dati**
   La collezione `studenti` è un array di oggetti dove ogni oggetto rappresenta uno studente con:
   - `id`: identificatore univoco
   - `nome`: stringa con il nome dello studente
   - `voti`: array di numeri rappresentanti i voti

2. **Estrazione dei Nomi**
   ```javascript
   const nomiStudenti = studenti.map(s => s.nome);
   ```
   Questo codice:
   - Usa il metodo `map` per trasformare l'array
   - Estrae solo la proprietà `nome` da ogni oggetto
   - Crea un nuovo array contenente solo i nomi
   - Risultato: `["Mario", "Laura"]`

3. **Filtro per Media Voti**
   ```javascript
   const studentiBravi = studenti.filter(s => 
       s.voti.reduce((accumulatore, valore) => accumulatore + valore, 0) / s.voti.length >= 8.5
   );
   ```
   Questa operazione più complessa:
   - Usa `filter` per selezionare solo alcuni studenti
   - Per ogni studente:
     - Calcola la somma dei voti con `reduce`
     - Divide per il numero di voti per ottenere la media
     - Confronta con la soglia (8.5)
   - Crea un nuovo array con solo gli studenti che soddisfano il criterio
   - Risultato: `[{ id: 2, nome: "Laura", voti: [9, 9, 8] }]` poiché solo Laura ha una media >= 8.5
     - Mario ha media 8 (24/3)
     - Laura ha media 8.67 (26/3)

L'esempio illustra tre concetti chiave nella manipolazione di collezioni JSON:

1. **Trasformazione (map)**
   - Crea un nuovo array
   - Mantiene la stessa lunghezza dell'originale
   - Cambia il tipo o la struttura dei dati
   - Utile per estrarre dati

2. **Aggregazione (reduce)**
   - Combina più valori in uno solo
   - Utilizzato per calcoli (somme, medie, ecc.)
   - Flessibile nella logica di aggregazione
   - Può gestire array di qualsiasi dimensione

3. **Filtro (filter)**
   - Seleziona un sottoinsieme di elementi
   - Mantiene la struttura originale degli elementi
   - Può utilizzare criteri complessi
   - Restituisce un nuovo array

Questi pattern sono fondamentali per:
- Elaborazione dati da API
- Preparazione dati per la visualizzazione
- Analisi e statistiche
- Ricerca e ordinamento

[⬅️ [TORNA ALL'INDICE] ](../README.md)
