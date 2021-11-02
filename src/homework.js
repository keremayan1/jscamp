//1. Odev 
function findPrime(...numbers) {
      
    for (let i = 0; i < numbers.length; i++){
       let counter=0;
        for (let j = 2; j < numbers[i]; j++) {
         if (numbers[i]%j==0) {
             counter=1;
             break;
         }
        }
        if (counter==0) {
            console.log(numbers[i]+" asaldir");
        } 
        else{
            console.log(numbers[i]+" asal degildir"); 
        }
    } 
   
}

//2. Odev
function friendNumber(number1, number2) {
    let result= 0;
    let  result2 = 0;
    for (let i = 1; i < number1; i++) {
      if (number1 % i == 0) {
        result += i;
        console.log("Bolunen Sayilar : " + i);
      }
    }
    console.log("-------------------")
    for (let i = 1; i < number2; i++) {
      if (number2 % i == 0) {
        result2 += i;
        console.log("Bolunen Sayilar : " + i);
      }
    }
    console.log("-------------------")
    if (result == number2 && result2 == number1) {
      console.log("Arkadaş Sayı");
    } else {
      console.log("Arkadaş Sayı Değil");
    }
  }
  friendNumber(220, 284);
   
  
  //3. Odev
  function mukemmelSayilar() {
    for (let i = 1; i < 1000; i++) {
        let toplam =0;
        for (let j = 0; j <i; j++) {
            if (i%j==0) {
                toplam+=j;
            }
        }
        if (toplam==i) {
            toplam=0;
            console.log(i);
        }
    }
}
mukemmelSayilar();
  
  
  //4. Odev
  function IsPrime() {
     for (let i = 2; i < 1000; i++) {
         let sayi =i;
         let sayac=0;
         
         for (let j = 2; j < sayi; j++){
            if (sayi%j==0) {
                sayac++;
                break;
            }
         }
         if (sayac==0) {
             sayac=0
             console.log(sayi);
         }
     }
  }
  
  

  
  
  
  
  