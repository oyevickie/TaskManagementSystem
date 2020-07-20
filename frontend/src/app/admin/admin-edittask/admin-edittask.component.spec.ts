import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEdittaskComponent } from './admin-edittask.component';

describe('AdminEdittaskComponent', () => {
  let component: AdminEdittaskComponent;
  let fixture: ComponentFixture<AdminEdittaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEdittaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEdittaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
