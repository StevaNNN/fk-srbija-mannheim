import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesAndResultsComponent } from './fixtures-and-results.component';

describe('FixturesAndResultsComponent', () => {
  let component: FixturesAndResultsComponent;
  let fixture: ComponentFixture<FixturesAndResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesAndResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesAndResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
