import { Component, OnInit } from '@angular/core';
import { Note } from '../core/models/note.model';
import { NoteService } from '../core/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers:[NoteService]
})
export class NoteListComponent implements OnInit {
   notes;
  
  constructor(private noteService: NoteService) {
    this.notes = this.noteService.getNotes();
    console.log(this.noteService.getNotes());
   }

  ngOnInit() {
 

  }

}
