import { Component, OnInit } from '@angular/core';
import { FormService } from './service/form.service';
import { User } from 'src/app/models/user.model';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User;
  submitted = false;
  constructor(public formService: FormService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.formService.addUser(this.user);
  }
}
