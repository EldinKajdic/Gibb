import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermodalPage } from './registermodal.page';

describe('RegistermodalPage', () => {
  let component: RegistermodalPage;
  let fixture: ComponentFixture<RegistermodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
