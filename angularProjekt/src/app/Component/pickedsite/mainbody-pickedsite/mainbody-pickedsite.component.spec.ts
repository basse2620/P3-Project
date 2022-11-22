import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbodyPickedsiteComponent } from './mainbody-pickedsite.component';

describe('MainbodyPickedsiteComponent', () => {
  let component: MainbodyPickedsiteComponent;
  let fixture: ComponentFixture<MainbodyPickedsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainbodyPickedsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainbodyPickedsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
