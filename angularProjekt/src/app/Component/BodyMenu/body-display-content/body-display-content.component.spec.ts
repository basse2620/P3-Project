import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyDisplayContentComponent } from './body-display-content.component';

describe('BodyDisplayContentComponent', () => {
  let component: BodyDisplayContentComponent;
  let fixture: ComponentFixture<BodyDisplayContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyDisplayContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyDisplayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
