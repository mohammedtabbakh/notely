export class Tag{
    id:number;
    name:string;
    modifiedDate:number;
    constructor(name:string,modifiedDate:number=0,id:number=0){
        this.name=name;
        this.modifiedDate= modifiedDate;
        this.id=id;
    }
    
}