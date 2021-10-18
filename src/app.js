console.log("Merhaba Dunya");


//JS type safe değildir
let dolarBugun = 9.30;
let dolarDun = 9.20;
dolarDun = "9.20"
{
    let dolarDun = 9.10
}
console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 11;
console.log(euroDun);


console.log(x);
let x = 10;
//array = dizi
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
    const element = konutKredileri[i];
    console.log(element);
    console.log("<li>"+konutKredileri[i]+"</li>");
}
console.log("</ul>");

//console.log(konutKredileri);





