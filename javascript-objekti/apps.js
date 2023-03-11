// const person = {
//     name: "Jovan",
//     "last-Name": "Jovanovic",
//     age: 85,
//     wifes: ["One", "Two"],
//     adress: {
//         country: "Serbia",
//         city: "Novi Pazar",
//         street: "prvomajska",
//         number: 91,
//     },
// };

// console.log("Nasa osoba se zove :", person.name);
// console.log("Nasa osoba zivi u :", person.adress.country);

// console.log("Nasa osoba se preziva:", person["last-Name"]);         //OVO JE DRUGI NACIN DA PRISTUPIMO OBJEKTU



// //SPREAD OPERATOR

// const produzeniNiz = {
//     ...person,
//     weight: 90, 
// }


// console.log(produzeniNiz);











//Domaci - napraviti niz koji ce da sadrzi 10 studenata, svaki student ima : ime, prezime, niz predmeta, niz ocena, departman
//broj ocena treba da ima onoliko koliko ima predmeta
//potrebno je da se prodje kroz svakog studenta, da im nadjemo prosecnu ocenu i da se ta ocena sacuva u nekom KEY-U
//napraviti niz u kojem cemo filtrirati studente koji imaju prosecnu ocenu vecu od 8




// const studenti = [{
//     ime: "Demir",
//     prezime: "Subasic",
//     predmeti: ["Srpski", "Engleski", "Matematika", "Osnovi Ekonomije"],
//     ocene: [6, 7, 10, 9],
//     departman: "Ekonomski"
// },
// {
//     ime: "Dzemil",
//     prezime: "Subasic",
//     predmeti: ["Srpski", "Latinski", "Matematika", "Pravo"],
//     ocene: [8, 9, 10, 8],
//     departman: "Pravni"
// },
// {
//     ime: "Osman",
//     prezime: "Sebecevac",
//     predmeti: ["Engleski", "Matematika 1", "Matematika 2", "Geodezija"],
//     ocene: [9, 6, 7, 6],
//     departman: "Gradjevinarstvo"
// },
// {
//     ime: "Alen",
//     prezime: "Kalac",
//     predmeti: ["Srpski", "Engleski", "Matematika", "Osnovi Ekonomije"],
//     ocene: [10, 8, 7, 6],
//     departman: "Ekonomski"
// },
// {
//     ime: "Omer",
//     prezime: "Tutic",
//     predmeti: ["Srpski", "Matematika", "Fizika", "Osnove Saobracaja"],
//     ocene: [7, 6, 6, 8],
//     departman: "Saobracajni"
// },
// {
//     ime: "Imran",
//     prezime: "Avdovic",
//     predmeti: ["Likovno", "Engleski", "Matematika", "Crtanje"],
//     ocene: [7, 8, 6, 10],
//     departman: "Dizajn"
// },
// {
//     ime: "Ensar",
//     prezime: "Alic",
//     predmeti: ["Fizicko", "Engleski", "Srpski", "Anatomija"],
//     ocene: [8, 8, 6, 10],
//     departman: "DIF"
// },
// {
//     ime: "Denis",
//     prezime: "Subasic",
//     predmeti: ["Srpski", "Engleski", "Fizika", "Hemija"],
//     ocene: [10, 10, 8, 8],
//     departman: "Medicina"
// },
// {
//     ime: "Emin",
//     prezime: "Radovic",
//     predmeti: ["Srpski", "Engleski", "Citanje", "Pravopis"],
//     ocene: [9, 10, 6, 8],
//     departman: "Sprski Jezik"
// },
// {
//     ime: "Aldin",
//     prezime: "Delic",
//     predmeti: ["Biologija", "Engleski", "Sprski", "Hemija"],
//     ocene: [6, 10, 8, 10],
//     departman: "Hemija"
// },
// ];



// studenti.map(student => {
//     let sum = 0;
//     student.ocene.map(ocena => {
//         sum += ocena;
//     });
//     student.average = sum / student.ocene.length;
// })


// const overEight = studenti.filter(student => student.average > 8);


// console.log(overEight);





//                                OVO JE FARISOV NACIN --------

// const studentsWithAvg = studenti.map((student) => {
//     return {
//         ...student,
//         average: student.ocene.reduce((prev, curr) => prev + curr) / student.ocene.length
//     };
// });



// const studentZaStipendiju = studentsWithAvg.filter(
//     (student) => student.average > 8
// );


// console.log(studentZaStipendiju);
