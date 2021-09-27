import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.model';
import { NoteService } from './note.service';

@Injectable()
export class TagService {
   private tags: Tag[]=
  [
    new Tag('music',Date.now(),1),
    new Tag('movies',Date.now(),2),
    new Tag('todo',Date.now(),3),
    new Tag('work',Date.now(),4),
  ];
  constructor(private noteService:NoteService) { }

  getTags():Tag[] {
    this.tags.forEach(element => {
      element.count=this.getTagCounts(element)
    });
   return this.tags.slice();
  }
  
  getTagCounts(tag){
    let counter=0;
    this.noteService.getNotes().forEach(item => {
      let val = item.tags.find(c => c.name == tag.name);
      if (val != undefined)
      counter++;
    })
    // this.emitNotesChangeEvent(filteredNotes);
    return counter;
  }
  editTag(index: number, tag: Tag) {
    this.tags[index] = tag;
  }
  removeTag(index: number) {
    this.tags.splice(index);
  }
  addTag(tag: Tag) {
    this.tags.push(tag);
  }
}
