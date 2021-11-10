export class Customer {
  constructor(id, customerNumber) {
    this.id = id;
    this.customerNumber = customerNumber;
  }
}
var customer = new Customer(1, "123456");
//prototyping

customer.adi = "Murat Kurtbogan";
console.log(Customer.adi);

Customer.bisey = "bisey";
console.log(customer.bisey);

console.log(customer.customerNumber);

export class IndiviualCustomer extends Customer {
  constructor(firstName, id, customerNumber) {
    super(id, customerNumber);
    this.firstName = firstName;
  }
}
class CorporateCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = companyName; 
  }
}
