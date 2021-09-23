import { Tag } from "./tag.model";

export class Note {
    $key:number
    id:number;
    title: string;
    details: string;
    modifiedDate: number;
    tags: Tag[];
    attachments:string[];

    constructor(id:number,title: string, details: string, modifiedDate: number, tags: Tag[],attachments?:string[]) {
        this.id=id;
        this.title = title;
        this.details = details;
        this.modifiedDate = modifiedDate;   
        this.tags = tags;
    }
}