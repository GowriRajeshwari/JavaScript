let object = null;
class SingltonPat{
    constructor(name){
        this.name = name;
        this.id = 10;
        object = this;
    }
    getObject(){
       if(object == null){
            object = new SingltonPat('Object1');
       }else{
            return object;
       }
    }
}
module.exports = {
    SingltonPat 
}