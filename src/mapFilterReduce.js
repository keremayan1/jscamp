let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
  { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
  { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
  { id: 5, productName: "Kitap", quantity: 5, unitPrice: 30 },
];

//Map
console.log("<ul>")
cart.map(product=>{
    console.log("<li>" +product.productName + " : " + product.unitPrice * product.quantity +"</li>");
}); //Sepeti dolas. Her bir product icin su hareketi yap. product burda takma isim
//Birden Fazla Map Yapicaksak takma isimden sonra {} koymamiz gerekir. Ornegin; product=>{} gibi
 console.log("</ul>")


let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0) //Virgulden Sonraki durum Kactan toplamaya baslayayim
console.log(total);




let quantityOver2 = cart.filter(product=>product.quantity>2 && product.unitPrice<4000) //Yeni Array Olusturmak
console.log(quantityOver2);




function addToCart(sepet) { //101'e itele
    sepet.push( { id: 6, productName: "Ruhsat", quantity: 1, unitPrice: 20 })
}

addToCart(cart)

console.log(cart);

let sayi = 10; //deger tip

function numbers(number) { //atama gerceklesmez
    number+=1;
}
numbers(sayi)
console.log(sayi);





