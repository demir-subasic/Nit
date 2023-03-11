// const person = {
//     name: "John",
//     lastName: "Doe",
//     getFullName: function(){
//         return `${this.name} ${this.lastName}`;
//     },
//     age: 20,
//     address: {
//         city:"Manchester",
//         street: "Ulica neka",
//         number: "99",
//         getFullAdress: function() {
//             return `${this.name} zivi u ulici ${this.street} ${this.number} u gradu ${this.city}`;
//         },
//     },
// }







//DOMACI
//napraviti funkciju koja ce da vrati nadimak (nadimak je prva dva slova imena i prva dva slova prezimena)

const osoba = {
    name: "Demir",
    lastName: "Subasic",
    getNickName: function () {
        return `${this.name.slice(0, 2)}${this.lastName.slice(0, 2).toLowerCase()}`;
    }
}
const nick = osoba.getNickName();

console.log(nick);