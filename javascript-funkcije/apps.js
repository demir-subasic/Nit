const city ="Novi Pazar";

console.log(city[3]);   // ovo ce ispisati slovo i jer je ono 3. u nizu

console.log(city.length);    // ovo ce ispisati 10  i ono broji koliko imamo slova

// ako zelimo da pristupimo zadnjem indeksu onda idemo na lenght -1

for(let i = 0; i < city.length; i++) {
    console.log(city[i]);
}     // ovo ce nam ispisati sva slova zbog petlje koju smo zadali








                                             
function kvadratODPet() {
    return 5*5;   // kada se pojavi return ona se zavrsava i ona vraca taj rezultat u memoriju
}

//        moramo negde da sacuvamo tu funkciju koju posle pozivamo i dobicemo rezultat te funkcije 
//        kada pozovemo tu varijablu
//        u koju smo sacuvali funkciju
const rezultatt = kvadratODPet();
console.log(rezultatt);


// primer
const unetiBroj = +prompt("Unesite broj ciji kvadrat zelite da izracunamo ?")
function kvadratBroja(n) {
    const result = n * n;
    return result;
}
// n je cuvar za pravi podatak koji ce doci na njegovo mesto, u ovom slucaju 125
const rezultat = kvadratBroja(unetiBroj);
console.log(rezultat);



// primer 2
function nasaFunkcija(a,b,c) {
    const sum = (a+b) * c;
    return sum;
}
console.log(nasaFunkcija(2,5,6));