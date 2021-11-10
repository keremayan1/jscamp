function addToCart(/*Default Deger*/ quantity, productName = "Elma") {
    console.log("Sepete Eklendi! " + productName + " adet :" + quantity);
  }
  //addToCart(); //Parametre cagirmadigin icin default deger doner
  addToCart(10);
  //addToCart("Karpuz")
  
  //1. Yontem
  //sayHello fonksiyondur
  let sayHello = () => {
    //Arrow Function
    console.log("Hello world");
  };
  sayHello();
  //2. Yontem
  let sayHello2 = function () {
    //Klasik fonksiyon
    console.log("Hello World 2");
  };
  sayHello2();
  
  let product = { productName: "Elma", quantity: 10, unitPrice: 5 };
  function addToCart2(product) {
    console.log(
      "Sepete :" +
        product.productName +
        " adeti : " +
        product.quantity +
        " fiyati :" +
        product.unitPrice
    );
  }
  addToCart2(product);
  
  //Cok onemli : Objeler REFERANS TIPTIR
  let product2 = { productName: "Elma", quantity: 10, unitPrice: 5 }; //101
  let product3 = { productName: "Elma", quantity: 10, unitPrice: 5 }; //102
  product2 = product3; //101'in referans numarasi 102'nin referans numarasina esittir.
  product2.productName = "Karpuz"; //102'nin productName = "Karpuz"
  console.log(product3.productName);
  
  function addToCart4(products) {
    //Scope
    console.log(products);
  }
  let products = [
    { productName: "Elma", quantity: 10, unitPrice: 5 },
    { productName: "Armut", quantity: 10, unitPrice: 5 },
  ];
  addToCart4(products);
  
  //rest
  //resti her zaman fonksiyon'daki parametrenin soluna yazilmalidir
  //Bir fonksiyonda bir tane rest operasyonu yazilir
  //Rest sadece fonksiyonda yazilir
  //Rest parametresi mutlaka son parametre olmali yoksa hata verir
  function add(bisey, ...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
      console.log(total);
      
      console.log(Math.max(numbers[i]));
    }
    console.log(bisey);
  }
  
  add("alsdhasdg",12,30); // let numbers =[20,30] ==> ...numbers'a gonderdi
  
  //Spread
  //Spread'in rest'ten tek farki fonksiyonlara yazilamamasi
  let numbers2 = [20, 30, 30, 60];
  console.log(Math.max(...numbers2));
  let kerem = { name: "Kerem", lastName: "ayan" };
  console.log(kerem.name);
  
  //Desctructing
  let [icAnadolu,marmara,[icAnadoluSehirleri,marmaraSehirleri]] = [
      { name: "Ic Anadolu", population: "20M" },
      { name: "Marmara", population: "30M" },
      [
          ["Ankara","Konya"],
          ["Istanbul","Bursa"]
      ]
      
  ];
  console.log(icAnadolu.population);
  console.log(icAnadolu.name);
  console.log(icAnadoluSehirleri);
  console.log(marmaraSehirleri);
  
  //1. Yontem
  let {productName,quantity,unitPrice}=  { productName: "Elma", quantity: 10, unitPrice: 5 };
  console.log(productName);
  //2.Yontem
  let newProductName,newQuantity,newUnitPrice
  ({productName:newProductName,quantity:newQuantity,unitPrice:newUnitPrice} =  { productName: "Elma", quantity: 10, unitPrice: 5 });
  console.log(newUnitPrice)
  
  
  //React'te obje destructuring yontemi bu sekilde kullanilir
  // function name({params}) {
      
  // }