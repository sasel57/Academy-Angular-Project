import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
@Input () text : string;
@Input () type : string;

  constructor() { }

  ngOnInit() {
  }

  cssClass(type: string): string {
    if (!type) {
      return;
    }
    switch (type) {
      case type = 'primary':
        return 'badge badge-primary';
      case type = 'secondary':
          return 'badge badge-secondary';
      case type = 'success':
          return 'badge badge-success';
      case type = 'danger':
          return 'badge badge-danger';
      case type = 'warning':
          return 'badge badge-warning';
      case type = 'info':
          return 'badge badge-info';
      case type = 'dark':
          return 'badge badge-dark';
      case type = 'light':
          return 'badge badge-light';
    }
  }

}