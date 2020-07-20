import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincompletetaskComponent } from './admincompletetask.component';

describe('AdmincompletetaskComponent', () => {
  let component: AdmincompletetaskComponent;
  let fixture: ComponentFixture<AdmincompletetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincompletetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincompletetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
