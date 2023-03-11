//UKLONITI DUPLIKATE IZ NIZA        uz pomoc seta

const nubers = [1,1,1,1,1,1,2,3,4,8,8,9]

const withoutDuplicate = [...new Set(nubers)];

console.log(withoutDuplicate)