import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.PersonComponent } from './app.person.component';

describe('App.PersonComponent', () => {
  let component: App.PersonComponent;
  let fixture: ComponentFixture<App.PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.PersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
