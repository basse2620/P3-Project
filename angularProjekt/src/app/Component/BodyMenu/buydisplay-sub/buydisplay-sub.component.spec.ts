import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuydisplaySubComponent } from './buydisplay-sub.component';

describe('BuydisplaySubComponent', () => {
  let component: BuydisplaySubComponent;
  let fixture: ComponentFixture<BuydisplaySubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuydisplaySubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuydisplaySubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
