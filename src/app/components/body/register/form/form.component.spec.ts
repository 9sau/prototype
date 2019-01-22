import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { FormService } from './service/form.service';

describe('FormComponent', () => {
  let component: FormComponent;
  // let fixture: ComponentFixture<FormComponent>;
  const service = new FormService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(FormComponent);
    component = new FormComponent(service);
    // fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
    expect(component.user).toBeDefined();
  });

  it('should submit the for, set submitted as true and call addUser', () => {
    spyOn(service, 'addUser');
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
    expect(service.addUser).toHaveBeenCalled();
  });
});
