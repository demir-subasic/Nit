//AKO ZELIMO DA SABEREMO NEKI TOTAL, NPR KADA PUNIMO KORPU NA WEB SAJTU 


const articles = [100, 100, 300, 400, 1000];

const total = articles.reduce(function(prev, curr) {
    return prev + curr;
}, 0);



