const DATA1 = [2,26,38,75,11,29];
const DATA2 = ["a", "b", "c", "d", "e"];


const newArray = DATA1.concat(DATA2);
console.log("CONCAT array", newArray)

const secondArray = newArray.map(function(num){
    if(num % 2 === 0){
    return num;
    }
})
console.log(secondArray)

console.log("Umetnuti brojevi", secondArray.unshift(10,20))









const noviNiz = DATA1.map(function(num,index){
    if (index === 0 || index === 3 || index === 5) {
        return num * num
    }
    return num


})
console.log(noviNiz)












const numbers2 = [2,5,10,3,4,8];

const pasceciNiz = numbers2.map(function(num, index){
   
    if (num > 2 && num < 8) {
        return num * 4/2
    }
    if(num > 2) {
        return num * 7
    }
  return num
});

const nizzz = pasceciNiz.filter(function(num){
    if(num < 10){
        return num;
    }
});

console.log(nizzz);

















const words = ["televizor", "daljinski", "telefon","voda", "ranac", "stolica"];

const wordsWithE = words.filter((el) => el[1] === "e");

console.log(wordsWithE)

