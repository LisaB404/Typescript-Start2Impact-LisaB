// CLASSI
var ProfessionistaMedia = /** @class */ (function () {
    function ProfessionistaMedia(nome, cognome, specializzazione, esperienza, interessi) {
        this.nome = nome;
        this.cognome = cognome;
        this.specializzazione = specializzazione;
        this.esperienza = esperienza;
        this.interessi = interessi;
    }
    ProfessionistaMedia.prototype.partecipaProgramma = function (programma) {
        programma.aggiungiPartecipante(this);
    };
    return ProfessionistaMedia;
}());
var ProgrammaFormazione = /** @class */ (function () {
    function ProgrammaFormazione(titolo, descrizione, ambitoSpecializzazione, durata) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.ambitoSpecializzazione = ambitoSpecializzazione;
        this.durata = durata;
        this.elencoPartecipanti = [];
    }
    ProgrammaFormazione.prototype.aggiungiPartecipante = function (professionista) {
        this.elencoPartecipanti.push(professionista);
    };
    return ProgrammaFormazione;
}());
var Piattaforma = /** @class */ (function () {
    function Piattaforma(nome, tipo, descrizione, categorieContenuto) {
        this.nome = nome;
        this.tipo = tipo;
        this.descrizione = descrizione;
        this.categorieContenuto = categorieContenuto;
    }
    Piattaforma.prototype.pubblicaContenuto = function (professionista, contenuto) {
        console.log("Il professionista ".concat(professionista.nome, " ").concat(professionista.cognome, " ha pubblicato un nuovo contenuto: ").concat(contenuto, " sulla piattaforma ").concat(this.nome));
    };
    return Piattaforma;
}());
// ISTANZA OGGETTI PROFESSIONISTAMEDIA
var professionista1 = new ProfessionistaMedia("Sara", "Rossi", "giornalista", 5, ["attualità", "nuoto", "politica"]);
var professionista2 = new ProfessionistaMedia("Vera", "Bianchi", "regista", 3, ["cinema", "teatro", "musica"]);
var professionista3 = new ProfessionistaMedia("Bianca", "Verdi", "scrittore", 2, ["letteratura", "poesia", "saggistica"]);
// ISTANZA OGGETTI PROGRAMMAFORMAZIONE
var mentorship = new ProgrammaFormazione("Mentorship", "Programma di mentorship per giovani professioniste donne.", "giornalismo", 12);
var sviluppo = new ProgrammaFormazione("Sviluppo professionale", "Programma di sviluppo professionale per giovani professioniste donne.", "produzione", 10);
var specializzazione = new ProgrammaFormazione("Specializzazione tecnica", "Programma di specializzazione tecnica per professioniste donne nel settore della comunicazione.", "media", 15);
// ISTANZA OGGETTI PIATTAFORMA
var blog = new Piattaforma("Voci Weekly", "blog", "Blog settimanale con approfondimenti e condivisione di storie di donne di successo.", ["attualità", "cultura", "società"]);
var social = new Piattaforma("VociDiDonne", "Instagram", "Account Instagram dell'azienda, dove vengono pubblicate intervista, approfondimenti e punti di vista eterogenei sul mondo dell'imprenditoralità femminile.", ["attualità", "imprenditoria", "giornalismo"]);
var youtube = new Piattaforma("Voci di donne", "YouTube", "Canale YouTube dove l'azienda condivide interviste con varie figure e consigli per la crescita professionale delle donne.", ["interviste", "cultura", "società"]);
// Professioniste partecipano a programmi
professionista1.partecipaProgramma(mentorship);
professionista2.partecipaProgramma(sviluppo);
professionista3.partecipaProgramma(specializzazione);
// Professioniste condividono contenuti sulla piattaforma
blog.pubblicaContenuto(professionista3, "Saggio sulle disparità di genere nel mondo dell'informazione.");
youtube.pubblicaContenuto(professionista2, "La produzione cinematografica al femminile.");
social.pubblicaContenuto(professionista1, "Intervista a una donna imprenditrice di successo.");
// Verifica del funzionamento della logica di collegamento
console.log("Elenco partecipanti al programma di Mentorship:");
console.log(mentorship.elencoPartecipanti);
console.log("Elenco partecipanti al programma di Sviluppo Professionale:");
console.log(sviluppo.elencoPartecipanti);
console.log("Elenco partecipanti al programma di Specializzazione Tecnica:");
console.log(specializzazione.elencoPartecipanti);
