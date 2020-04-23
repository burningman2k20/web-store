import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingPageComponent } from './living-page.component';

describe('LivingPageComponent', () => {
  let component: LivingPageComponent;
  let fixture: ComponentFixture<LivingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
