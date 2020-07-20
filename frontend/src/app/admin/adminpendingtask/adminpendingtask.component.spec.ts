import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpendingtaskComponent } from './adminpendingtask.component';

describe('AdminpendingtaskComponent', () => {
  let component: AdminpendingtaskComponent;
  let fixture: ComponentFixture<AdminpendingtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpendingtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpendingtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
