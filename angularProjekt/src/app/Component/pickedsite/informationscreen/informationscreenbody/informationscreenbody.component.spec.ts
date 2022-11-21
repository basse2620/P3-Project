import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationscreenbodyComponent } from './informationscreenbody.component';

describe('InformationscreenbodyComponent', () => {
  let component: InformationscreenbodyComponent;
  let fixture: ComponentFixture<InformationscreenbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationscreenbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationscreenbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
