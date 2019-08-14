import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NspeakersComponent } from './nspeakers.component';

describe('NspeakersComponent', () => {
  let component: NspeakersComponent;
  let fixture: ComponentFixture<NspeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NspeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NspeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
