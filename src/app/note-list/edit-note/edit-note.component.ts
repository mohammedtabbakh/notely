import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/core/services/note.service';
import { Note } from 'src/app/core/models/note.model';
import { TagService } from 'src/app/core/services/tag.service';
import { Tag } from 'src/app/core/models/tag.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
  providers: [NoteService,TagService]
})
export class EditNoteComponent implements OnInit {
  //#region declerations
  note: Note;
  noteId: number = 0;
  noteFormControl = new FormControl('');
  selectedTags:Tag[];
  tags:Tag[];
  //#endregion

  constructor(private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,
    private tagsService: TagService) { }

  ngOnInit() {
    this.noteId = this.route.snapshot.params['id'];
    this.note = this.noteService.getNoteById(this.noteId);
    console.log( this.noteId);
    console.log(this.note);
    this.tags=this.tagsService.getTags();
  }
  saveChanges(){
    console.log(this.note);
    console.log(this.selectedTags);
    this.noteService.editNote(this.note)
    this.router.navigate(['home']);
  }
}

