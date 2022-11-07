import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyDisplayComponent } from './buy-display.component';

describe('BuyDisplayComponent', () => {
  let component: BuyDisplayComponent;
  let fixture: ComponentFixture<BuyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
