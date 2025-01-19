// INTERFACES
interface IProfessionalMedia {
    name: string; 
    surname: string;
    expertise: string; //journaling, directing, production, ecc.
    experience: number; //experience in years
    interests: string[];

    partecipatesToProgram(program: IEducationProgram): void; 
}

interface IEducationProgram {
    title: string;
    description: string;
    areaOfSpecialization: string;
    duration: number; //duration in days
    attendeeList: IProfessionalMedia[];

    addAttendee(professional: IProfessionalMedia): void;
}

interface IPlatform {
    name: string;
    type: string; //paper, online, video
    description: string;
    contentCategories: string[];

    publishContent(professional: IProfessionalMedia, content: string): void;
}

// CLASSES
class ProfessionalMedia implements IProfessionalMedia {
    name: string; 
    surname: string;
    expertise: string;
    experience: number; //experience in years
    interests: string[];

    constructor(name: string, surname: string, expertise: string, experience: number, interests: string[]) {
        this.name = name;
        this.surname = surname;
        this.expertise = expertise;
        this.experience = experience;
        this.interests = interests;
    }

    partecipatesToProgram(program: IEducationProgram): void {
        program.addAttendee(this);
    }
}

class EducationProgram implements IEducationProgram {
    title: string;
    description: string;
    areaOfSpecialization: string;
    duration: number; // duration in days
    attendeeList: IProfessionalMedia[];

    constructor(title: string, description: string, areaOfSpecialization: string, duration: number) {
        this.title = title;
        this.description = description;
        this.areaOfSpecialization = areaOfSpecialization;
        this.duration = duration;
        this.attendeeList = [];
    }
    
    addAttendee(professional: IProfessionalMedia): void {
        this.attendeeList.push(professional);
    }
}

class Platform implements IPlatform {
    name: string;
    type: string; //paper, online, video
    description: string;
    contentCategories: string[];

    constructor (name: string, type: string, description: string, contentCategories: string[]){
        this.name = name;
        this.type = type;
        this.description = description;
        this.contentCategories = contentCategories;
    }

    publishContent(professional: IProfessionalMedia, content: string): void {
        console.log(`The professional ${professional.name} ${professional.surname} published the new content: "${content}", on the platform:  ${this.type} ${this.name}`);
    }
}

// Objects Instances ProfessionalMedia
const professional1 = new ProfessionalMedia("Sara", "Rossi", "journalist", 5, ["law", "human rights", "policy"]);
const professional2 = new ProfessionalMedia("Vera", "Bianchi", "director", 3, ["cinema", "theater", "music"]);
const professional3 = new ProfessionalMedia("Bianca", "Verdi", "writer", 2, ["literature", "poetry", "history"]);

// Objects Instances EducationProgram
const mentorship = new EducationProgram("Mentorship", "mentorship program for young professional women.", "journalism", 12);
const development = new EducationProgram("Professional development", "developmentprogram for female professionals.", "manufactoring", 10);
const expertise = new EducationProgram("Technical expertise", "technical expertise program for women in the communication industry.", "media", 15);

// Objects Instances Platform
const web = new Platform("Voices Weekly", "web", "Weekly blog with insights and stories of successful women", ["policy", "culture", "society"]);
const social = new Platform("@FemaleVoices", "Instagram", "The company's Instagram account, where interviews, insights and diverse points of view on the world of female entrepreneurship are published,", ["culture", "enterpreneurship", "journalism"]);
const youtube = new Platform("Female Voices", "YouTube", "YouTube channel where the company shares interviews with various figures and advice for the professional growth of women.", ["interviews", "culture", "society"]);


// Professional participates to programs
professional1.partecipatesToProgram(mentorship);
professional2.partecipatesToProgram(development);
professional3.partecipatesToProgram(expertise);
professional1.partecipatesToProgram(expertise);

// Professionals publish content on platforms
web.publishContent(professional3, "Essay on gender disparities in the world of information");
youtube.publishContent(professional2, "A female perspective of movie production");
social.publishContent(professional1, "Interview with a successful female entrepreneur");


// List attendees to the programs
function printAttendees(program: IEducationProgram): void {
    program.attendeeList.forEach(professional =>{
        console.log(`${professional.name} ${professional.surname}`);
    });
};

console.log("List of participants in the Mentorship program:");
printAttendees(mentorship);
console.log("List of participants in the Professiona development program:");
printAttendees(development);
console.log("List of participants in the Technical expertise program:");
printAttendees(expertise);