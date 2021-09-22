import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './note-list/edit-note/edit-note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'home', component: NoteListComponent },
  { path: 'add', component: EditNoteComponent },
  { path: 'edit/:id', component: EditNoteComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
