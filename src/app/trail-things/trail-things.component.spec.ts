import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailThingsComponent } from './trail-things.component';

describe('TrailThingsComponent', () => {
  let component: TrailThingsComponent;
  let fixture: ComponentFixture<TrailThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailThingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
