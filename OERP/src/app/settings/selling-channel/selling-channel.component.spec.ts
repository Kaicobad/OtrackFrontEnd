import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingChannelComponent } from './selling-channel.component';

describe('SellingChannelComponent', () => {
  let component: SellingChannelComponent;
  let fixture: ComponentFixture<SellingChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
