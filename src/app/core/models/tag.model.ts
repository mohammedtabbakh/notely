export class Tag{
    id:number;
    name:string;
    modifiedDate:number;
    count:number;
    constructor(name:string,modifiedDate:number=0,id:number=0,count?){
        this.name=name;
        this.modifiedDate= modifiedDate;
        this.id=id;
        this.count=count;
    }
    
}