import { Component, OnInit } from '@angular/core';
import { Note } from '../core/models/note.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { NoteService } from '../core/services/note.service';
import { Tag } from '../core/models/tag.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NoteService]
})
export class HomeComponent implements OnInit {
  public thenotes;
  constructor(db: AngularFireDatabase, noteService: NoteService) {
    this.thenotes=noteService.getNotes();
  }
  ngOnInit(): void {
  }

}