import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeathersComponent } from './feathers.component';

describe('FeathersComponent', () => {
  let component: FeathersComponent;
  let fixture: ComponentFixture<FeathersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeathersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeathersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
