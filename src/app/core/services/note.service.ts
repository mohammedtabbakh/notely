import { EventEmitter, Injectable } from '@angular/core';
import { Note } from '../models/note.model'
import { Tag } from '../models/tag.model';
import { DatabaseService } from './db.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [
    new Note(1, 'test note1', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag('music', Date.now(), 1)]),
    new Note(2, 'test note2', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("todolist"), new Tag("work")]),
    new Note(3, 'test note3', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("music"), new Tag("work")]),
    new Note(4, 'test note4', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("music"), new Tag("todo"), new Tag("work")]),
    new Note(5, 'test note5', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("music"), new Tag("todo"), new Tag("work")]),
    new Note(6, 'test note6', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("movies"), new Tag("todo"), new Tag("work")]),
  ]
  tags: Tag[];
  note = null;
 private notesChagnes: EventEmitter<Note[]> = new EventEmitter();
  
  public emitNotesChangeEvent(notes) {
    this.notesChagnes.emit(notes);
  }
  public getNotesChangeEmitter() {
    return this.notesChagnes;
  }
  addNote(newNote: Note) {
    newNote.id = this.notes.length + 1;
    newNote.modifiedDate = Date.now();
    this.notes.push(newNote);
  }
  noteRef: AngularFireObject<Note>;
  constructor(private db: AngularFireDatabase) { 
  }
  addNotebyfirebase(note: Note) {
    this.db.list('/notes').push(note);
  }
  getNotes() {
    return this.notes;
  }
  getNodeById(id: number) {
    let note = null;
    this.notes.forEach(element => {
      if (element.id == id)
        note = element;
    });
    return note;
  }

  getNotesbyfirbase() {
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

  getNotebykeybyFirebase(key: string) {
    this.db.object('notes/' + key).valueChanges().subscribe(data => {
      this.note = data
    })
    console.log(this.note as Note);

    return this.note as Note;
  }

  editNote(newNote: Note) {
    var noteIndex;
    noteIndex = this.GetIndexFromId(newNote.id);

    this.notes[noteIndex].title = newNote.title;
    this.notes[noteIndex].tags = newNote.tags;
    this.notes[noteIndex].details = newNote.details;
    console.log(this.notes[noteIndex]);
  }

  DeleteNote(id: number) {
    this.notes.splice(this.GetIndexFromId(id), 1);
  }
  GetIndexFromId(id: number) {
    var noteIndex;

    this.notes.forEach((value, index) => {
      if (value.id == id)
        noteIndex = index;
    });
    return noteIndex;
  }

  filterbyTag(tag: Tag) {
    let filteredNotes: Note[] = [];
    this.notes.forEach(item => {
      let val = item.tags.find(c => c.name == tag.name);

      if (val != undefined)
        filteredNotes.push(item);
    })
    // this.emitNotesChangeEvent(filteredNotes);
    return filteredNotes;
  }
}
