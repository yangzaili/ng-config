import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NworkshopsComponent } from './nworkshops.component';

describe('NworkshopsComponent', () => {
  let component: NworkshopsComponent;
  let fixture: ComponentFixture<NworkshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NworkshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NworkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
