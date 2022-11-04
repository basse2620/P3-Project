import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBitchComponent } from './master-bitch.component';

describe('MasterBitchComponent', () => {
  let component: MasterBitchComponent;
  let fixture: ComponentFixture<MasterBitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterBitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterBitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
