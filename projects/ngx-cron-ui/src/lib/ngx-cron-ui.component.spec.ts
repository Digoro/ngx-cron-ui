import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCronUiComponent } from './ngx-cron-ui.component';

describe('NgxCronUiComponent', () => {
  let component: NgxCronUiComponent;
  let fixture: ComponentFixture<NgxCronUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCronUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCronUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
