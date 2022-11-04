import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerHeaderComponent } from './lower-header.component';

describe('LowerHeaderComponent', () => {
  let component: LowerHeaderComponent;
  let fixture: ComponentFixture<LowerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
