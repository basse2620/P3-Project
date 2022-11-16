import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDadBodComponent } from './main-dad-bod.component';

describe('MainDadBodComponent', () => {
  let component: MainDadBodComponent;
  let fixture: ComponentFixture<MainDadBodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDadBodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDadBodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
