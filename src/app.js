//npm run dev :Projenin calismasini saglar
//npm install: ilk projeyi yukledigimizde yazilacak kod node_modules'i indirir

// console.log("Merhaba Dunya");


// //JS type safe değildir
// let dolarBugun = 9.30; 
// let dolarDun = 9.20;
// dolarDun = "9.20"
// { 
//     let dolarDun = 9.10
// }
// console.log(dolarDun);

// const euroDun = 11.2;
// //euroDun = 11;
// console.log(euroDun);


// console.log(x);
// let x = 10;
// //array = dizi
// //camelCasing
// //PascalCasing
//  let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"];
// console.log(konutKredileri);
// console.log("<ul>");
// for (let i = 0; i < konutKredileri.length; i++) {
//     const element = konutKredileri[i];
//     console.log(element);
//     console.log("<li>"+konutKredileri[i]+"</li>");
// }
// console.log("</ul>");

//console.log(konutKredileri);
let sayi1 = 10;
 sayi1="Engin Demirog"
let student = {id:1,name:"Engin"};
//console.log(student);

function save(puan=1,ogrenci) {
    console.log(ogrenci.name + " : "+puan);
}
//save(undefined,student);

let students=["engin demirog","halit kalayci","engin toprak","busra"]
let students2 = [student,{id:2,name:"Halit"},"asdjkhasd",{city:"ankara"}]
//console.log(students2);


//rest(geriye kalanlar) 
//params c#
//varArgs
// ... kullanimi arraydir
// rest parametresi array olarak degil sadece bir eleman gonderilmis gibi alir
//rest'te virguller ile gonderilmesi gerekir
let showProducts= function (id,...products) {
    console.log(id);
    console.log(products);
}
//console.log(typeof showProducts)  ;
//showProducts(10,"Elma","Armut"); 

// rest ile spread arasindaki fark: Restte istedigimiz kadar parametre gonderebiliriz. Array olarak tutulur. Spread'de ise elimizdeki olan bir array'i ayristirmamizi saglar


//spread
let points = [1,2,3,4,5,60,14]
//console.log(...points);
//console.log(Math.max(...points));
//console.log(..."ABC","D","EFG","H");



//destructuring
//elimizdeki array'in icindeki degerleri degiskenlere atama
// array ile destructure alimi
let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunc([small1],number) {
    console.log(small1)
}
someFunc(populations);

let category = {id:1,name:"Icecek"};
console.log(category);
console.log(category["name"]);

//objeyle destructure alimi
let {id,name1} = category;
console.log(id);
console.log(name1);
//Redux





