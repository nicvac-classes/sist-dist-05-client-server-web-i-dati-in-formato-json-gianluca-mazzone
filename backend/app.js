

// INSERIRE QUI IL CODICE INDICATO NELL'ESERCIZIO
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Configurazione
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Percorso del file JSON
const dataPath = path.join('backend', 'data', 'studenti.json');

// Funzione per leggere il file JSON
function leggiJsonStudenti() {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Errore lettura file:', error);
        return { studenti: [] };
    }
}

// Funzione per salvare nel file JSON
function salvaJsonStudenti(data) {
    try {
        //I parametri null, 4 permettono di scrivere il file json con
        // l'indentazione, in modo che sia facilmente leggibile.
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 4));
        return true;
    } catch (error) {
        console.error('Errore scrittura file:', error);
        return false;
    }
}

// Route principale
app.get('/', (req, res) => {
    const data = leggiJsonStudenti();
    res.render('index', { studenti: data.studenti });
});

// Route per aggiungere studente
app.post('/aggiungi-studente', (req, res) => {
    // Leggi dati esistenti
    const data = leggiJsonStudenti();
    
    // Calcola nuovo ID, aggiungendo 1 al valore più grande
    let nuovoId = 1;
    let iMax = 0;
    for (let i = 0; i < data.studenti.length; i++) {
        if (data.studenti[i].id > data.studenti[iMax].id) {
            iMax = i;
            nuovoId = data.studenti[iMax].id + 1;
        }
    }
    
    // Crea nuovo studente
    const nuovoStudente = {
        id: nuovoId,
        nome: req.body.nome,
        crediti: parseInt(req.body.crediti)
    };
    
    // Aggiungi il nuovo studente alla struttura e lo salva in JSON
    data.studenti.push(nuovoStudente);
    salvaJsonStudenti(data);
    
    // Redirect alla home
    res.redirect('/');
});