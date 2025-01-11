import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSortingComponent } from './grid-sorting.component';

describe('GridSortingComponent', () => {
  let component: GridSortingComponent;
  let fixture: ComponentFixture<GridSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridSortingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
