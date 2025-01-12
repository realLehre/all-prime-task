import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPage2Component } from './design-page-2.component';

describe('DesignPage2Component', () => {
  let component: DesignPage2Component;
  let fixture: ComponentFixture<DesignPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
