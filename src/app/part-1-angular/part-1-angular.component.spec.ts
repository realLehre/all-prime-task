import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part1AngularComponent } from './part-1-angular.component';

describe('Part1AngularComponent', () => {
  let component: Part1AngularComponent;
  let fixture: ComponentFixture<Part1AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part1AngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part1AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
