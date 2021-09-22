import { Component, Injectable, OnInit } from '@angular/core';
import { Tag } from '../core/models/tag.model';
import { TagService } from '../core/services/tag.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [TagService]
})
export class SidebarComponent implements OnInit {
  tags:Tag[]=[];
  constructor(private tagservice: TagService) {
   
  }

  ngOnInit() {
     this.tags = this.tagservice.getTags();
  }

}
