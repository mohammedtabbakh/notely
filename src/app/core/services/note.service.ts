import { Injectable } from '@angular/core';
import { Note } from '../models/note.model'
import { Tag } from '../models/tag.model';
import { DatabaseService } from './db.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable()
export class NoteService {
  notes: Note[]=[];
  tags: Tag[];

  constructor(private db: AngularFireDatabase) { }
  addNote(note: Note) {
    this.db.list('/notes').push(note);
  }
  getNotes() {
    let notes = this.db.list<Note>("/notes");
    notes.snapshotChanges().subscribe(data => {
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['tags'] = [];
        a['$key'] = item.key;
        a['attachments'] = [];
        console.log(a);
        this.notes.push(a as Note);
      })
    })

    return this.notes;

  }


  editNote(newNote: Note) {
    var dbIndex = this.notes.findIndex(note => note.id == newNote.id);
    this.notes[dbIndex] = newNote;
    console.log(this.notes[dbIndex]);
  }
  removeNote(index: number) {
    this.notes.splice(index);
  }

}
