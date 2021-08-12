import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDetailsComponent } from './style-details.component';

describe('StyleDetailsComponent', () => {
  let component: StyleDetailsComponent;
  let fixture: ComponentFixture<StyleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
