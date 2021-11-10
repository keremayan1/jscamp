export default class User {
  constructor(id, firstName, lastName, city) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
  }
}

// export default class Customer extends User{

//     constructor(companyName){
// super(this.id,this.firstName,this.lastName);
// this.companyName = companyName;
//     }
// }
