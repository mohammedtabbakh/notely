import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.model';

@Injectable()
export class TagService {
   private tags: Tag[]=
  [
    new Tag('music',Date.now(),1),
    new Tag('movies',Date.now(),2),
    new Tag('todo',Date.now(),3),
    new Tag('work',Date.now(),4),
  ];
  constructor() { }

  getTags():Tag[] {
   return this.tags.slice();
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
