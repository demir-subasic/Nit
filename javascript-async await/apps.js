// ovo je nacin da nas niz users popunimo podacima sa neta
// let users = [];
// const getUsers = async () => {
//     const response = await fetch("https://reqres.in/api/users?page=2");
//     const data = await response.json();

//     users = data.data;
//     console.log(users)
// }; 

// getUsers();



//DOMACI ODRADRITI : user kartice da napravimo (slika,ime,prezime,email), da povucemo podatke da sacuvamo u varijablu i da usere prikazemo u interfejs i da svaki user ima svoju karticu
//                   to radimo na isti princip kao sto smo prikazali sve odgovore na kvizu i trebamo da prikazemo sve usere na interfejs
//                   preko forEach se radi 



const getUsers = async () => {
    try{
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();

    users = data.data;
    console.log(users);
    }
    catch (e) {
        console.log(e);
    }
}; 

getUsers();