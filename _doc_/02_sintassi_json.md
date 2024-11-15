[⬅️ [TORNA ALL'INDICE] ](../README.md)

# Sintassi e Struttura JSON

## Tipi di Dati
JSON supporta sei tipi di dati fondamentali, ognuno con un suo scopo specifico:

1. **Stringhe**
   - Racchiuse da doppi apici
   - Esempio: `"Hello World"`
   - Usate per testo e identificatori
   - Supportano escape sequences come `\n`, `\t`, `\"`, ecc.

2. **Numeri**
   - Interi o decimali
   - Notazione scientifica supportata
   - Esempio: `42`, `3.14`, `1.2e-10`
   - Non c'è distinzione tra interi e float
   - Non supporta `Infinity`, `-Infinity` o `NaN`

3. **Booleani**
   - Solo `true` o `false`
   - Utili per flag e stati binari

4. **null**
   - Rappresenta l'assenza di valore
   - Diverso da una stringa vuota o zero
   - Utile per campi opzionali

5. **Oggetti**
   - Collezione di coppie chiave-valore
   - Le chiavi devono essere stringhe
   - I valori possono essere di qualsiasi tipo JSON
   - L'ordinamento delle chiavi non è garantito. Ad esempio un oggetto JSON quando viene ricostruito sul server, può avere le chiavi ordinate diversamente rispetto al JSON originale inviato dal client.
   
6. **Array**
   - Lista ordinata di valori
   - Un elemento della lista può essere qualsiasi tipo JSON (quindi a loro volta array o oggetti complessi)
   - L'ordine è significativo
   - Possono essere eterogenei (una lista può contenere elementi di tipo diverso)

## Regole di Sintassi

### 1. Struttura Oggetti Base
```json
{
    "nome": "Mario",
    "età": 25,
    "città": "Roma",
    "attivo": true,
    "hobbies": ["lettura", "sport"],
    "indirizzo": {
        "via": "Via Roma",
        "numero": 1
    }
}
```

Questo primo esempio illustra i concetti fondamentali della struttura oggetto JSON:
- La coppia chiave-valore è il mattone fondamentale
- Le coppie chiave-valore sono separati da virgole
- Le chiavi sono sempre stringhe tra doppi apici
- I valori possono essere di qualsiasi tipo supportato
- Gli oggetti possono essere nidificati (indirizzo ha come valore a sua volta un oggetto JSON)
- Gli array possono contenere valori multipli
- Non sono permessi commenti nel JSON reale

### 2. Struttura Array
Un array può essere usato come valore nella coppia chiave-valore.
```json
[
    "primo",
    42,
    true,
    {
        "chiave": "valore"
    },
    ["array", "nidificato"]
]
```

Questo esempio di array mostra:
- La flessibilità degli array JSON nel contenere tipi diversi
- La possibilità di nidificare strutture (un elemento di un array può essere a sua volta un oggetto JSON)
- L'importanza dell'ordine negli array (a differenza degli oggetti)
- Come gli array possano mescolare tipi primitivi e strutture complesse

### 3. Esempio Complesso
```json
{
    "corso": {
        "nome": "Informatica",
        "anno": 5,
        "studenti": [
            {
                "id": 1,
                "nome": "Mario Rossi",
                "voti": [8, 7, 9],
                "ripetente": true
            },
            {
                "id": 2,
                "nome": "Laura Bianchi",
                "voti": [9, 9, 8],
                "ripetente": false
            }
        ],
        "materie": {
            "principale": "Programmazione",
            "complementari": ["Database", "Reti"]
        }
    }
}
```

## Analisi dell'Esempio Complesso

Questo esempio avanzato dimostra diverse caratteristiche importanti di JSON:

1. **Nidificazione Profonda**
   - L'oggetto radice contiene un oggetto "corso"
   - Questo a sua volta contiene array e altri oggetti
   - La nidificazione può continuare a qualsiasi profondità

2. **Array di Oggetti**
   - L'array "studenti" contiene oggetti complessi
   - Ogni oggetto studente ha la stessa struttura
   - Questo pattern è comune nelle API e database

3. **Dati Strutturati**
   - I voti sono rappresentati come array di numeri
   - Le materie complementari come array di stringhe
   - Gli identificatori sono numeri
   - Gli stati sono booleani

4. **Uso Pratico**
   Questa struttura potrebbe essere usata per:
   - Rappresentare dati di una classe scolastica
   - API di un sistema gestionale
   - Configurazione di un'applicazione
   - Storage di dati strutturati

## Best Practices nella Strutturazione JSON

1. **Coerenza nei Tipi**
   - Usare lo stesso tipo per lo stesso tipo di dato
   - Evitare di mischiare stringhe e numeri per gli ID
   - Mantenere coerenza nelle strutture ripetute

2. **Nomi Significativi**
   - Usare nomi di chiavi descrittivi
   - Seguire una convenzione di naming consistente
   - Evitare abbreviazioni ambigue

3. **Struttura Logica**
   - Raggruppare dati correlati in oggetti
   - Usare array per liste di elementi simili
   - Mantenere una gerarchia sensata

4. **Ottimizzazione**
   - Bilanciare tra profondità e leggibilità
   - Evitare nidificazioni eccessive

[⬅️ [TORNA ALL'INDICE] ](../README.md)