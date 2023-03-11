const QUESTIONS = [
    {
        id: 1,
        question: "Koja je najveca planina na svetu?",
        answers: ["Kilimandzaro", "Fudzi", "Mont Everest", "K2", "Kopaonik"],
        correct_answer: "Mont Everest",
        points: 1,
    },
    {
        id: 2,
        question: "Koliko minuta traje fudbalska utakmica?",
        answers: ["45", "60", "90", "75", "120"],
        correct_answer: "90",
        points: 1,
    },
    {
        id: 3,
        question: "Koje godine je poceo prvi svetski rat?",
        answers: ["1915", "1914", "1916", "1939", "1918"],
        correct_answer: "1914",
        points: 1,
    },
    {
        id: 4,
        question: "Koja je zvanicna valuta u Danskoj?",
        answers: ["Kruna", "Franak", "Dinar", "Lev", "Euro"],
        correct_answer: "Kruna",
        points: 1,
    },
    {
        id: 5,
        question: "Koji je glavni grad Makedonije",
        answers: ["Sofija", "Prag", "Sarajevo", "Skoplje", "Budimpesta"],
        correct_answer: "Skoplje",
        points: 1,
    }
    
];
let CURRENT_POINTS = 0;
let i = 0;
let START_POINTS = QUESTIONS.length;

const maxPoints = QUESTIONS.reduce((prev, curr) => {
   return prev + curr.points}, 0);


const initializeQuiz = () => {
    console.log("Kviz se pokrece")
    const questionContainer = document.querySelector("#pitanje");
    const answersContainer = document.querySelector("#odgovori");
    questionContainer.textContent = "";
    answersContainer.textContent = "";
   
    const question = QUESTIONS[i];
    
    if (i < QUESTIONS.length) {

    questionContainer.textContent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;

        button.onclick = () => {
            submitAnser(question.id, button.textContent);
            
        }

        answersContainer.appendChild(button)
    });
} else {
    questionContainer.textContent = `Kraj kviza osvojili ste ${CURRENT_POINTS} / ${START_POINTS} poena`;
}
};



//Kada se funkcija okine, treba da prebaci na sledece pitanje
//Ukoliko je dati odgovor tacan, dodati korisniku onoliko poena koliko to pitanje nosi,
//Prebaciti na sledece pitanje, bilo da je odgovor tacan ili netacan
const submitAnser = (id, answer) => {
    const question = QUESTIONS[i];

    if(question.id === id) {
         //Prebaci na sledece pitanje
         i++;
        if(question.correct_answer === answer ) {
            CURRENT_POINTS += question.points;
            console.log(CURRENT_POINTS);
        }
    }
            
    initializeQuiz();
}

initializeQuiz();







