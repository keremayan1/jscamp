export  class BaseLogger{
    log(data){
    }
}
export  class FileLogger extends BaseLogger{
        log(data){
            console.log("Logged To FileLogger "+data)
        }
}
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged To Elastic " + data)
    }
}
