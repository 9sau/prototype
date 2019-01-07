import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  navigationList = [{
      name: 'FAQs',
      value: 'FAQs',
      route: '/faq'
    }, {
      name: 'Register',
      value: 'Register',
      route: '/form'
    }];

  constructor() { }

  ngOnInit() {
  }

}
