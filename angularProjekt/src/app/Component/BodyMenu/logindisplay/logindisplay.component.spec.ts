import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindisplayComponent } from './logindisplay.component';

describe('LogindisplayComponent', () => {
  let component: LogindisplayComponent;
  let fixture: ComponentFixture<LogindisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogindisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
