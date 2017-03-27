import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHP7Component } from './php7.component';

describe('PHP7Component', () => {
  let component: PHP7Component;
  let fixture: ComponentFixture<PHP7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PHP7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHP7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
