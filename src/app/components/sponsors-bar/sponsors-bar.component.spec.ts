import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsBarComponent } from './sponsors-bar.component';

describe('SponsorsBarComponent', () => {
  let component: SponsorsBarComponent;
  let fixture: ComponentFixture<SponsorsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
