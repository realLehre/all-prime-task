import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2DesignComponent } from './part-2-design.component';

describe('Part2DesignComponent', () => {
  let component: Part2DesignComponent;
  let fixture: ComponentFixture<Part2DesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part2DesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part2DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
