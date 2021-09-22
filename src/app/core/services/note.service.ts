import { Injectable } from '@angular/core';
import { Note } from '../models/note.model'
import { Tag } from '../models/tag.model';
@Injectable()
export class NoteService {
  private notes: Note[] = [
    new Note(1, 'test note1', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("music"), new Tag("todolist"), new Tag("work")]),
    new Note(2, 'test note2', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("music"), new Tag("todolist"), new Tag("work")]),
    new Note(3, 'test note3', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("music"), new Tag("todolist"), new Tag("work")]),
    new Note(4, 'test note4', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("music"), new Tag("todolist"), new Tag("work")]),
    new Note(5, 'test note5', 'this is just a test for note details field in no details field in no details field in no details field in no details field in notetly app', Date.now(), [new Tag("music"), new Tag("todolist"), new Tag("work"), new Tag("work")]),
  ];
  constructor() { }

  getNotes() {
    return this.notes.slice();
  }
  getNoteById(id: number): Note {
    return this.notes.find(note => note.id ==id);

  }
  editNote(newNote: Note) {
    var dbIndex = this.notes.findIndex(note => note.id == newNote.id);
    this.notes[dbIndex]=newNote;
    console.log( this.notes[dbIndex]);
  }
  removeNote(index: number) {
    this.notes.splice(index);
  }
  addNote(note: Note) {
    this.notes.push(note);
  }
}
