import { Component, OnInit } from '@angular/core';
import { Note } from '../core/models/note.model';
import { Tag } from '../core/models/tag.model';
import { NoteService } from '../core/services/note.service';
import { TagService } from '../core/services/tag.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers:[TagService]
})
export class NoteListComponent implements OnInit {
  notes;
  tags;
  subscription;
  constructor(private noteService: NoteService,
              private tagsService:TagService) {
  }
  ngOnInit() {
    // this.subscription = this.noteService.getNotesChangeEmitter()
    //   .subscribe(item => this.updateNotes(item));
    //   this.noteService.emitNotesChangeEvent(this.notes);
    this.notes = this.noteService.getNotes();
    this.tags=this.tagsService.getTags();
    
  }

  updateNotes(notes) {
    alert("updateNotes");
    this.notes = notes;
  }
  OnTagClick(value: Tag) {
    this.notes=this.noteService.filterbyTag(value);
  }
}
