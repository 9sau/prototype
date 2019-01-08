import { Component, OnInit } from '@angular/core';
import { FormService } from './service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: any = {
    email: '',
    password: ''
  };
  submitted = false;
  constructor(public formService: FormService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.formService.addUser(this.user);
  }
}
