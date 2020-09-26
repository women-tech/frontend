import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxFairComponent } from './parallax-fair.component';

describe('ParallaxFairComponent', () => {
  let component: ParallaxFairComponent;
  let fixture: ComponentFixture<ParallaxFairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxFairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
