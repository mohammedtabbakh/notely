import { Component, OnInit,Input } from '@angular/core';
import { NoteService } from '../core/services/note.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NoteService]
})
export class HomeComponent implements OnInit {
  public thenotes;
  constructor() {
  }
  ngOnInit(): void {
  }
  OnChange(tag){
    alert();
    console.log(tag);
  }
}