import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPage3Component } from './design-page-3.component';

describe('DesignPage3Component', () => {
  let component: DesignPage3Component;
  let fixture: ComponentFixture<DesignPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignPage3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
