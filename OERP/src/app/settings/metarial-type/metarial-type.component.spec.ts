import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetarialTypeComponent } from './metarial-type.component';

describe('MetarialTypeComponent', () => {
  let component: MetarialTypeComponent;
  let fixture: ComponentFixture<MetarialTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetarialTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetarialTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
