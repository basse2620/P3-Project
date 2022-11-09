import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuydisplayComponent } from './buydisplay.component';

describe('BuydisplayComponent', () => {
  let component: BuydisplayComponent;
  let fixture: ComponentFixture<BuydisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuydisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
