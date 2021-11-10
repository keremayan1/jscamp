import { BaseLogger, ElasticLogger, FileLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../Models/User.js";
import UserService from "../services/userService.js"

console.log("User component loaded")


let logger1 = new FileLogger();
let userService = new UserService(logger1);
let user = new User(1,"Engin","Demirog","Ankara");
let user2 = new User(2,"Salih","Gökçekli","Muğla");



userService.add(user);
userService.add(user2);

console.log(userService.list())
console.log(userService.getById(2)) 





// let customer ={id:1,firstName:"Engin"}
// customer.lastName = "Demirog"

// console.log(customer.lastName); 