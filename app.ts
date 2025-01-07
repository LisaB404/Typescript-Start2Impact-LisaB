// INTERFACCE
interface IProfessionistaMedia {
    nome: string; 
    cognome: string;
    specializzazione: string; //giornalismo, regia, produzione, ecc.
    esperienza: number; //esperienza in anni
    interessi: string[];

    partecipaProgramma(programma: IProgrammaFormazione): void; 
}

interface IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number; //durata in giorni
    elencoPartecipanti: IProfessionistaMedia[];

    aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

interface IPiattaforma {
    nome: string;
    tipo: string; //stampato, online, audiovisivo
    descrizione: string;
    categorieContenuto: string[];

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void;
}

// CLASSI
class ProfessionistaMedia implements IProfessionistaMedia {
    nome: string; 
    cognome: string;
    specializzazione: string;
    esperienza: number; //esperienza in anni
    interessi: string[];

    constructor(nome: string, cognome: string, specializzazione: string, esperienza: number, interessi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }

    partecipaProgramma(programma: IProgrammaFormazione): void {
        programma.aggiungiPartecipante(this);
    }
}

class ProgrammaFormazione implements IProgrammaFormazione {
    titolo: string;
    descrizione: string;
    ambitoSpecializzazione: string;
    durata: number; // durata in giorni
    elencoPartecipanti: IProfessionistaMedia[];

    constructor(titolo: string, descrizione: string, ambitoSpecializzazione: string, durata: number) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
        this.elencoPartecipanti = [];
    }
    
    aggiungiPartecipante(professionista: IProfessionistaMedia): void {
        this.elencoPartecipanti.push(professionista);
    }
}

class Piattaforma implements IPiattaforma {
    nome: string;
    tipo: string; //stampato, online, audiovisivo
    descrizione: string;
    categorieContenuto: string[];

    constructor (nome: string, tipo: string, descrizione: string, categorieContenuto: string[]){
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }

    pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void {
        console.log(`Il professionista ${professionista.nome} ${professionista.cognome} ha pubblicato un nuovo contenuto: "${contenuto}", sulla piattaforma ${this.tipo} ${this.nome}`);
    }
}

// Istanza oggetti ProfessionistaMedia
const professionista1 = new ProfessionistaMedia("Sara", "Rossi", "giornalista", 5, ["attualità", "diritti umani", "politica"]);
const professionista2 = new ProfessionistaMedia("Vera", "Bianchi", "regista", 3, ["cinema", "teatro", "musica"]);
const professionista3 = new ProfessionistaMedia("Bianca", "Verdi", "scrittore", 2, ["letteratura", "poesia", "storia"]);

// Istanze oggetti ProgrammaFormazione
const mentorship = new ProgrammaFormazione("Mentorship", "Programma di mentorship per giovani professioniste donne.", "giornalismo", 12);
const sviluppo = new ProgrammaFormazione("Sviluppo professionale", "Programma di sviluppo professionale per giovani professioniste donne.", "produzione", 10);
const specializzazione = new ProgrammaFormazione("Specializzazione tecnica", "Programma di specializzazione tecnica per professioniste donne nel settore della comunicazione.", "media", 15);

// Istanze oggetti Piattaforma
const web = new Piattaforma("Voci Weekly", "web", "Blog settimanale con approfondimenti e condivisione di storie di donne di successo", ["attualità", "cultura", "società"]);
const social = new Piattaforma("@VociDiDonne", "Instagram", "Account Instagram dell'azienda, dove vengono pubblicate intervista, approfondimenti e punti di vista eterogenei sul mondo dell'imprenditoralità femminile", ["attualità", "imprenditoria", "giornalismo"]);
const youtube = new Piattaforma("Voci di donne", "YouTube", "Canale YouTube dove l'azienda condivide interviste con varie figure e consigli per la crescita professionale delle donne", ["interviste", "cultura", "società"]);


// Professioniste partecipano a programmi
professionista1.partecipaProgramma(mentorship);
professionista2.partecipaProgramma(sviluppo);
professionista3.partecipaProgramma(specializzazione);
professionista1.partecipaProgramma(specializzazione);

// Professioniste condividono contenuti sulla piattaforma
web.pubblicaContenuto(professionista3, "Saggio sulle disparità di genere nel mondo dell'informazione");
youtube.pubblicaContenuto(professionista2, "La produzione cinematografica al femminile");
social.pubblicaContenuto(professionista1, "Intervista a una donna imprenditrice di successo");


// Elenco partecipanti ai programmi
function stampaPartecipanti(programma: IProgrammaFormazione): void {
    programma.elencoPartecipanti.forEach(professionista =>{
        console.log(`${professionista.nome} ${professionista.cognome}`);
    });
};

console.log("Elenco partecipanti al programma di Mentorship:");
stampaPartecipanti(mentorship);
console.log("Elenco partecipanti al programma di Sviluppo Professionale:");
stampaPartecipanti(sviluppo);
console.log("Elenco partecipanti al programma di Specializzazione Tecnica:");
stampaPartecipanti(specializzazione);