import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.model';
import { NoteService } from './note.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private noteService: NoteService) { }

  invokeTagsChange(tag: Tag) {
    alert("invokeTagsChange");
    this.noteService.emitNotesChangeEvent(this.noteService.filterbyTag(tag));
  }
}
