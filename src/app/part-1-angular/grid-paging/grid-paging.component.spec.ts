import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPagingComponent } from './grid-paging.component';

describe('GridPagingComponent', () => {
  let component: GridPagingComponent;
  let fixture: ComponentFixture<GridPagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridPagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
