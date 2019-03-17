import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { settingsPage } from './settings.page';

describe('settingsPage', () => {
  let component: settingsPage;
  let fixture: ComponentFixture<settingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [settingsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(settingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
