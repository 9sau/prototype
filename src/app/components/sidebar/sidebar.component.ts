import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navigationList = [{
    name: 'FAQs',
    value: 'FAQs',
    route: 'faqs'
  }, {
    name: 'Register',
    value: 'Register',
    route: 'form'
  }];

  constructor() { }

  ngOnInit() {
  }

}
