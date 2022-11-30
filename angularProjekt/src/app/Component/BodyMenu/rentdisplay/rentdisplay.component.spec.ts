import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentdisplayComponent } from './rentdisplay.component';

describe('RentdisplayComponent', () => {
  let component: RentdisplayComponent;
  let fixture: ComponentFixture<RentdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
