import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyingSourceComponent } from './dying-source.component';

describe('DyingSourceComponent', () => {
  let component: DyingSourceComponent;
  let fixture: ComponentFixture<DyingSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyingSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyingSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
