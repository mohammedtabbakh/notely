import { Component, OnInit } from '@angular/core';
import { Note } from '../core/models/note.model';
import { NoteService } from '../core/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes;
  subscription;
  constructor(private noteService: NoteService) {
  }
  ngOnInit() {
    // this.subscription = this.noteService.getNotesChangeEmitter()
    //   .subscribe(item => this.updateNotes(item));
    //   this.noteService.emitNotesChangeEvent(this.notes);
    this.notes = this.noteService.getNotes();
  }

  updateNotes(notes) {
    alert("updateNotes");
    this.notes = notes;
  }
}
