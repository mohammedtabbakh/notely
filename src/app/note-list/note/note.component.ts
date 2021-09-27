import { Component, OnInit,Input } from '@angular/core';
import { Note } from 'src/app/core/models/note.model';
import { NoteService } from 'src/app/core/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
@Input() note:Note;
  constructor( private noteService: NoteService) { }

  ngOnInit() {
  console.log(this.note);
  }
  onDeleteClicks(){
    this.noteService.DeleteNote(this.note.id);
  }
}
