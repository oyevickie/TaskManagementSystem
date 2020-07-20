import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaskdetailsComponent } from './admin-taskdetails.component';

describe('AdminTaskdetailsComponent', () => {
  let component: AdminTaskdetailsComponent;
  let fixture: ComponentFixture<AdminTaskdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTaskdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaskdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
