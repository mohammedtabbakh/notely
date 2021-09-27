import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Tag } from '../core/models/tag.model';
import { FilterService } from '../core/services/filter.service';
import { TagService } from '../core/services/tag.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [TagService]
})
export class SidebarComponent implements OnInit {
  tags: Tag[] = [];
  constructor(private tagservice: TagService,private filterService: FilterService) {
  }

  ngOnInit() {
    this.tags = this.tagservice.getTags();
  }

  OnTagClick(value: Tag) {
    alert();
    this.filterService.invokeTagsChange(value);
  }
}
