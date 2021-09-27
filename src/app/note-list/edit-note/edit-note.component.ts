import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, NgModel } from '@angular/forms';
import { NoteService } from 'src/app/core/services/note.service';
import { Note } from 'src/app/core/models/note.model';
import { TagService } from 'src/app/core/services/tag.service';
import { Tag } from 'src/app/core/models/tag.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
  providers: [TagService]
})
export class EditNoteComponent implements OnInit {
  //#region declerations
  note: Note = new Note(0, ' ', ' ', Date.now(), null, null);
  noteId: string = '0';
  selectedTags: Tag[];
  tags: Tag[];
  //#endregion

  constructor(private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,
    private tagsService: TagService) { }

  ngOnInit() {
    this.tags=this.tagsService.getTags();
    this.noteId = this.route.snapshot.params['id'];
    if (this.noteId == undefined)
      this.note = new Note();
    else
      this.note = this.noteService.getNodeById(parseInt(this.noteId));

  }
  saveChanges() {
    console.log(this.note);
    if (this.note.id == undefined)
      this.noteService.addNote(this.note)

    else
      this.noteService.editNote(this.note)

    this.router.navigate(['home']);
  }
}

